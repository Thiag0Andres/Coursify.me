import React, { useCallback, useEffect, useState } from "react";
import { CardPost, LoadingIndicator } from "..";
import api from "../../services/axios";

import * as S from "./styles";

interface Props {
  id: number;
}

const ListingPosts: React.FC<Props> = ({ id }: Props) => {
  const [posts, setPosts] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getPosts = useCallback(() => {
    setLoading(true);
    api
      .get(`/posts?categories=${id}&per_page=5`)
      .then((response) => {
        if (response.status === 200) {
          setPosts(response.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <S.ContentList
      horizontal
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
      showsHorizontalScrollIndicator={false}
    >
      {posts &&
        posts.map((item: any) => <CardPost key={item.id} data={item} />)}
    </S.ContentList>
  );
};

export default ListingPosts;
