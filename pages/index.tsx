import React from "react";
import { Button, Htag, Ptag, Tag } from "../components";

export default function Home() {
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
    </>
  );
}
