import { NextComponentType, NextPageContext } from "next";
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

export interface FCIDefault {
  children: JSX.Element;
}

export type PageType<Props = {}, InitialProps = Props> = NextComponentType<
  NextPageContext,
  InitialProps,
  Props
> & {
  Layout: FC<FCIDefault>;
};

export interface IImage {
  src: string;
  height: number;
  width: number;
}

export type HTMLInputAttributes = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type HTMLDivAttributes = DetailedHTMLProps<
  InputHTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
