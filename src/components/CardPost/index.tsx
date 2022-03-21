import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SCREEN } from "../../routes/constant/route-name";
import api from "../../services/axios";

import * as S from "./styles";

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
  featured_media: number;
}

interface Props {
  data: IPost;
}

const CardPost: React.FC<Props> = ({ data }: Props) => {
  const navigation = useNavigation();
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

  useEffect(() => {
    getPostImage(data.featured_media);
  }, [getPostImage]);

  console.log(data.featured_media);

  const handleReadMore = () => {
    navigation.navigate(SCREEN.INFORMATIVECONTENT, {
      post: data,
      media: postImage,
    });
  };

  return (
    <>
      {!loading && data && postImage !== "" && (
        <S.Container>
          <S.Image
            source={{
              uri: postImage,
            }}
          />
          <S.Content>
            <S.TitleCard numberOfLines={2}>{data.title.rendered}</S.TitleCard>
            <S.TextCard numberOfLines={4}>
              {data.content.rendered.replace(/<\/?[^>]+(>|$)/g, "")}
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
