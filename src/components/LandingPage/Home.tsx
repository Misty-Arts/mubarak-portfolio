import { HERO_IMAGE } from "@/lib/images/landing-page";
import Image from "next/image";
import { FC } from "react";
import styles from "./LandingPage.module.css";

const Home: FC = () => {
  return (
    <section id="home">
      <div className="custom-container">
        <div className="flex">
          <div className="font-raleway w-1/2">
            <p className="text-2xl leading-7">Hello</p>
            <h1 className="text-64px flex gap-4">
              {"I’m"}
              <div className="flex flex-col">
                Mubaraq
                <svg
                  className={styles.single_animation_icon}
                  width="278"
                  height="14"
                  viewBox="0 0 278 14"
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
          </div>
          <div className="w-1/2 max-w-500px">
            <Image {...HERO_IMAGE} alt="Image of Mubaraq Somuyiwa" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
