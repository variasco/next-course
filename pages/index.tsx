import axios from "axios";
import { GetStaticProps } from "next";
import { useState } from "react";
import { Button, Htag, Ptag, Rating, Tag } from "../components";
import { MenuItem } from "../interfaces/menu.interface";
import { withLayout } from "../layout/Layout";

function Home({ menu, firstCategory }: HomeProps) {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag style={{ margin: "10px 0" }} tag="h2">
        Кнопки
      </Htag>
      <Button>Кнопка</Button>
      <Button arrow="down">Кнопка2</Button>
      <Button appearance="ghost" arrow="down">
        Кнопка3
      </Button>
      <Button appearance="primary" arrow="right">
        Кнопка4
      </Button>

      <Htag style={{ margin: "10px 0" }} tag="h2">
        Параграфы
      </Htag>
      <Ptag size="16px">Параграф средний</Ptag>
      <Ptag size="14px">Параграф малый</Ptag>
      <Ptag size="18px">Параграф большой</Ptag>
      <Ptag>Параграф без параметров</Ptag>

      <Htag style={{ margin: "10px 0" }} tag="h2">
        Теги
      </Htag>
      <Tag>Дефолт</Tag>
      <Tag color="green" size="small">
        Зеленый s
      </Tag>
      <Tag color="red" size="medium">
        Краcный m
      </Tag>
      <Tag color="primary">Основной</Tag>

      <Htag style={{ margin: "10px 0" }} tag="h2">
        Рейтинг
      </Htag>
      <Rating rating={rating} editable setRating={setRating} />
      <Rating rating={3} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    { firstCategory }
  );
  return { props: { menu, firstCategory } };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
