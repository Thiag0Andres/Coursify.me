import React from "react";
import { useWindowDimensions } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import RenderHtml from "react-native-render-html";
import { Footer, Header } from "../../components";
import { IPost } from "../../components/CardPost";

import * as S from "./styles";

interface IData {
  post: IPost;
  media: string;
}

const InformativeContent: React.FC = () => {
  const { width } = useWindowDimensions();
  const {
    params: informativeContent,
  }: RouteProp<Record<string, IData>, string> = useRoute();

  return (
    <>
      <Header />
      <S.Container>
        <S.ContainerBody>
          <S.TitleText>{informativeContent.post.title.rendered}</S.TitleText>
          <S.InformativeImage
            source={{
              uri: informativeContent.media,
            }}
          />
          <S.ContainerHtml>
            <RenderHtml
              contentWidth={width - 52}
              source={{
                html: informativeContent.post.content.rendered,
              }}
            />
          </S.ContainerHtml>
        </S.ContainerBody>
        <Footer />
      </S.Container>
    </>
  );
};

export default InformativeContent;
