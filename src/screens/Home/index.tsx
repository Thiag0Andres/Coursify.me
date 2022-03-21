import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { Header, Footer } from "../../components";
import ListingPosts from "../../components/ListingPosts";
import api from "../../services/axios";

import * as S from "./styles";

interface ICategory {
  id: number;
  name: string;
  description: string;
  count: number;
}

const Home: React.FC = () => {
  const [categories, setCategories] = useState<Array<ICategory>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getCategories = useCallback(() => {
    setLoading(true);
    api
      .get(`/categories`, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setCategories(response.data);
        }
      })
      .catch((err) => {
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <S.Container>
      <Header />
      <S.Content>
        <S.ContentCategories>
          {!loading &&
            categories &&
            categories.map((item: ICategory) => (
              <View key={item.id}>
                <S.TitleCategory>{item.name}</S.TitleCategory>
                <ListingPosts id={item.id} />
              </View>
            ))}
        </S.ContentCategories>
        <Footer />
      </S.Content>
    </S.Container>
  );
};

export default Home;
