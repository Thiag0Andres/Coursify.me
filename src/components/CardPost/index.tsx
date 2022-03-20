import React, { useCallback, useEffect, useState } from "react";
import api from "../../services/axios";

import * as S from "./styles";

interface Props {
  id: number;
}

interface IPost {
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
  const [post, setPost] = useState<IPost>();
  const [postImage, setPostImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const getPostImage = useCallback((id: string) => {
    setLoading(true);
    api
      .get(`/media/${id}`)
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

  return (
    <>
      {post && postImage && (
        <S.Container>
          <S.Image
            source={{
              uri: postImage,
            }}
          />
          <S.Content>
            <S.TitleCard numberOfLines={2}>
              {post ? post.title.rendered : ""}
            </S.TitleCard>
            <S.TextCard numberOfLines={4}>
              {post ? post.content.rendered.replace(/<\/?[^>]+(>|$)/g, "") : ""}
            </S.TextCard>
            <S.Button>
              <S.ButtonText>Leia mais</S.ButtonText>
            </S.Button>
          </S.Content>
        </S.Container>
      )}
    </>
  );
};

export default CardPost;
