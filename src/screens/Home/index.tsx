import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { Header, Footer, ListingPosts } from "../../components";
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
      .get(`/categories`)
      .then((response) => {
        if (response.status === 200) {
          setCategories(response.data);
          setLoading(false);
        }
      })
      .catch((err) => {
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
          {categories &&
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
