import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../../routes/constant/route-name";
import api from "../../services/axios";

import * as S from "./styles";

interface Props {
  id: number;
}

export interface IPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: string;
}

const CardPost: React.FC<Props> = ({ id }: Props) => {
  const navigation = useNavigation();
  const [post, setPost] = useState<IPost>();
  const [postImage, setPostImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const getPostImage = useCallback((postId: number) => {
    setLoading(true);
    api
      .get(`/media/${postId}`)
      .then((response) => {
        if (response.status === 200) {
          setPostImage(response.data.guid.rendered);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  const getPost = useCallback(() => {
    setLoading(true);
    api
      .get(`/posts/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setPost(response.data);
          getPostImage(response.data.featured_media);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getPost();
  }, [getPost]);

  const handleReadMore = () => {
    navigation.navigate(SCREEN.INFORMATIVECONTENT, {
      post: post,
      media: postImage,
    });
  };

  return (
    <>
      {post && postImage !== "" && (
        <S.Container>
          <S.Image
            source={{
              uri: postImage,
            }}
          />
          <S.Content>
            <S.TitleCard numberOfLines={2}>{post.title.rendered}</S.TitleCard>
            <S.TextCard numberOfLines={4}>
              {post.content.rendered.replace(/<\/?[^>]+(>|$)/g, "")}
            </S.TextCard>
            <S.Button onPress={handleReadMore}>
              <S.ButtonText>Leia mais</S.ButtonText>
            </S.Button>
          </S.Content>
        </S.Container>
      )}
    </>
  );
};

export default CardPost;
