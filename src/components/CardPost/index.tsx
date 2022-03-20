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
  featured_media: number;
  excerpt: {
    rendered: string;
  };
}

const CardPost: React.FC<Props> = ({ id }: Props) => {
  const [post, setPost] = useState<IPost>();
  const [loading, setLoading] = useState<boolean>(false);

  const getPost = useCallback(() => {
    setLoading(true);
    api
      .get(`/posts/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setPost(response.data);
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

  console.log(post);

  return (
    <S.Container>
      <S.TitleCard>{post?.title.rendered}</S.TitleCard>
    </S.Container>
  );
};

export default CardPost;
