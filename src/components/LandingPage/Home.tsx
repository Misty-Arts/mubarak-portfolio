import ProductDesigner from "@/lib/icons/Hero/ProductDesigner";
import UxDesigner from "@/lib/icons/Hero/UxDesigner";
import UxResearcher from "@/lib/icons/Hero/UxResearcher";
import { HERO_IMAGE } from "@/lib/images/landing-page";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./LandingPage.module.css";

const Home: FC = () => {
  return (
    <section id="home" className="py-10">
      <div className="custom-container">
        <div className="flex md:px-16 items-center">
          <div className="font-raleway md:w-1/2 scale-75 md:scale-100 origin-left">
            <p className="text-2xl leading-7 mb-2">Hello</p>
            <h1 className="text-64px flex gap-4">
              {"I’m"}
              <div className="flex flex-col text-blue">
                <div className="flex gap-0.5">
                  <div className={styles.single_animation_text_m}>M</div>
                  <div className={styles.single_animation_text_u}>u</div>
                  <div className={styles.single_animation_text_b}>b</div>
                  <div className={styles.single_animation_text_a1}>a</div>
                  <div className={styles.single_animation_text_r}>r</div>
                  <div className={styles.single_animation_text_a2}>a</div>
                  <div className={styles.single_animation_text_q}>q</div>
                </div>
                <svg
                  className={styles.single_animation_icon}
                  width="282"
                  height="14"
                  viewBox="0 0 282 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={styles.single_animation_path}
                    d="M2 12C47.2725 4.28555 101.337 1.57881 151.562 2.0521C194.696 2.45857 238.564 4.91253 280 9.08368"
                    stroke="#616163"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </h1>

            <h2 className="mt-2 mb-14 text-32px relative overflow-hidden whitespace-nowrap">
              <span>I am a</span>
              <div className={styles.single_animation_words}>
                <div className="mb-4">
                  <div className="flex flex-col leading-7 text-orange">
                    Product Designer
                    <ProductDesigner />
                  </div>
                </div>
                <div className="my-4">
                  <div className="flex flex-col leading-7 text-wine">
                    UX Researcher
                    <UxResearcher />
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col leading-7 text-green">
                    UX Designer
                    <UxDesigner />
                  </div>
                </div>
              </div>
            </h2>

            <Link href="#contact" className="btn text-blue font-semibold text-base leading-7">Work with me</Link>
          </div>
          <div className="hidden md:block md:w-1/2 max-w-500px ml-auto">
            <Image {...HERO_IMAGE} alt="Image of Mubaraq Somuyiwa" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
