import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HTMLAttributes } from "react";

interface ILayoutContainerProps extends HTMLAttributes<HTMLDivElement> {
  wraperClass?: string;
  itemClass?: string;
}

interface ICardProps {
  time: string;
  title: string;
  company: string;
  description: string;
}

interface IExperienceCardProps extends ICardProps {
  last?: boolean;
}

interface IProjectCardProps {
  imgSrc: string;
  title: string;
  list: string[];
  links: { href: string; title: string }[];
}

const LayoutContainer = ({
  wraperClass = "",
  itemClass = "max-w-screen-2xl",
  children,
  ...rest
}: ILayoutContainerProps): JSX.Element => (
  <section className={`cus-flex-col-item-center ${wraperClass}`} {...rest}>
    <div className={`w-full px-8 ${itemClass}`}>{children}</div>
  </section>
);

const SectionTitle = ({ title }: { title: string }) => (
  <h3 className="text-2xl font-extrabold leading-10 py-6 mb-10 text-center w-full border-t-2 border-b-2 border-slate-100">
    {title}
  </h3>
);

const ExperienceCard = ({
  time,
  title,
  company,
  description,
  last = false,
}: IExperienceCardProps) => (
  <div className="grid md:grid-rows-1 md:grid-cols-2 w-full">
    <div className="pr-8 relative overflow-y-clip overflow-x-visible">
      <p className="text-xl text-right pb-3">{time}</p>
      <p className="text-right pb-3 md:pb-16 text-slate-500">{title}</p>
      <span className="absolute top-2 -right-1 w-[9px] h-[9px] rounded-full bg-violet-600" />
      {!last && (
        <span className="absolute top-6 right-[0px] w-px h-full bg-slate-500/50" />
      )}
    </div>
    <div className="pl-8">
      <p className="text-xl pb-3">{company}</p>
      <p className="pb-16 text-slate-500 w-full">{description}</p>
    </div>
  </div>
);

const EducationCard = ({ time, title, company, description }: ICardProps) => (
  <div className="overflow-x-clip overflow-y-visibl pb-16">
    <p className="text-xl pb-3">{time}</p>
    <p className="text-slate-500">{title}</p>
    <div className="relative py-8">
      <span className="absolute top-7 left-0 w-[9px] h-[9px] rounded-full bg-violet-600" />
      <span className="absolute top-8 left-4 h-px w-full bg-slate-500/50" />
    </div>
    <p className="text-xl pb-3">{company}</p>
    <p className="text-slate-500">{description}</p>
  </div>
);

const ProjectCard = ({ imgSrc, title, list, links }: IProjectCardProps) => (
  <div className="cus-flex-col-item-center ">
    <img
      src={imgSrc}
      alt="gama-green screenshot"
      width={365}
      height={241}
      className="rounded-xl mb-6"
    />
    <h4 className="text-xl pb-3">{title}</h4>
    <ul className="list-[square] list-inside text-slate-500 pb-6">
      {list.map((l) => (
        <li key={l}>{l}</li>
      ))}
    </ul>
    <div className="mt-auto pb-16">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          target="_blank"
          className="tag ml-0 my-0"
        >
          {l.title}
        </Link>
      ))}
    </div>
  </div>
);

export default function Home() {
  const [showMenu, setShowMenu] = React.useState(false);

  const NavLink = () => (
    <>
      {[
        { href: "#about-me", title: "About Me" },
        {
          href: "#experience",
          title: "Experience",
        },
        {
          href: "#techstacks",
          title: "Tech Stacks",
        },
        {
          href: "#projects",
          title: "Projects",
        },
        {
          href: "#cv",
          title: "CV",
        },
      ].map((link, ind) => (
        <Link
          key={ind}
          href={link.href}
          scroll={false}
          onClick={() => showMenu && setShowMenu(false)}
          className="tag m-0"
        >
          {link.title}
        </Link>
      ))}
    </>
  );

  return (
    <div className="min-h-screen">
      <Head>
        <title>Fullstack Developer | Lyle Liao</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
        <link rel="canonical" href="https://liaochungyid.github.io/about-me/" />
        <meta
          name="description"
          content="Fullstack developer. Mission-driven full stack developer with a passion for thoughtful
            component design, collaboration, and new tech stack exploration."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://liaochungyid.github.io/about-me/"
        />
        <meta
          property="og:site_name"
          content="Fullstack Developer | Lyle Liao"
        />
        <meta property="og:locale" content="zh_tw" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:site"
          content="https://liaochungyid.github.io/about-me/"
        />
        <meta name="twitter:creator" content="Lyle Liao" />
        <meta
          name="twitter:title"
          property="og:title"
          itemProp="name"
          content="Fullstack Developer | Lyle Liao"
        />
        <meta
          name="twitter:description"
          property="og:description"
          itemProp="description"
          content="Fullstack developer. Mission-driven full stack developer with a passion for thoughtful
            component design, collaboration, and new tech stack exploration."
        />
        <meta
          name="twitter:image"
          property="og:image"
          itemProp="image primaryImageOfPage"
          content="./landing-view.png"
        />
        <meta
          name="twitter:image:alt"
          content="Fullstack Developer | Lyle Liao"
        />
      </Head>

      <header>
        <LayoutContainer wraperClass="py-4" itemClass="max-w-screen-lg">
          <div className="cus-flex-row-item-center justify-between">
            <h3 className="text-2xl font-extrabold text-violet-600">
              廖仲逸 &#8211; Lyle Liao
            </h3>
            <div className="hidden lg:cus-flex-row-item-center justify-between gap-4">
              <NavLink />
            </div>
            <div className="relative lg:hidden">
              <button
                type="button"
                className="relative w-8 h-8 p-1"
                onClick={() => setShowMenu((prev) => !prev)}
              >
                <span
                  className={`cus-transition absolute top-1.5 left-1 w-6 h-0.5 bg-slate-900 ${
                    showMenu && "-rotate-45 origin-top-right scale-x-110"
                  }`}
                />
                <span
                  className={`cus-transition absolute top-[15px] left-1 w-6 h-0.5 bg-slate-900 ${
                    showMenu && "w-0"
                  }`}
                />
                <span
                  className={`cus-transition absolute top-6 left-1 w-6 h-0.5 bg-slate-900 ${
                    showMenu && "rotate-45 origin-top-right scale-x-110"
                  }`}
                />
              </button>
              <div
                className={`cus-transition absolute top-12 right-0 cus-flex-col-item-center px-10 items-end lg:hidden justify-between gap-4 backdrop-blur-md overflow-hidden ${
                  showMenu ? "h-72" : "h-0"
                }`}
              >
                <NavLink />
              </div>
            </div>
          </div>
        </LayoutContainer>
      </header>

      <main className="">
        {/* Hero section */}
        <LayoutContainer
          wraperClass="pt-16 pb-24"
          itemClass="cus-flex-col-item-center max-w-screen-lg"
        >
          <h1 className="text-4xl font-extrabold leading-10 py-6 text-center">
            Fullstack Developer
          </h1>
          <p className="text-center text-slate-500 pb-16">
            Mission-driven full stack developer with a passion for thoughtful
            component design, collaboration, and new tech stack exploration.
          </p>
          <img
            src="./illustration.jpg"
            alt=""
            width={375}
            height={375}
            className="rounded-full"
          />
          <div className="cus-flex-row-item-center flex-nowrap gap-4 w-full pt-6">
            <div className="cus-flex-col-item-center items-end w-1/2">
              <span className="text-xl">LinkedIn</span>
              <Link
                href="https://www.linkedin.com/in/chungyi-liao/"
                target="_blank"
                className="text-slate-500"
              >
                chungyi-liao
              </Link>
            </div>
            <div className="w-px h-5/6 bg-slate-500 text-transparent">|</div>
            <div className="cus-flex-col-item-center items-start w-1/2 overflow-auto">
              <span className="text-xl">Email</span>
              <Link
                href="mailto:liaochungyid@gmail.com?subject=Hello&body=what%20you%20wanna%20tell%20me"
                target="_blank"
                className="text-slate-500"
              >
                liaochungyid@gmail.com
              </Link>
            </div>
          </div>
          <div className="cus-flex-row-item-center justify-center flex-nowrap gap-4 w-full pt-6">
            <Link
              href="https://github.com/liaochungyid"
              target="_blank"
              className="tag m-0 text-slate-500 cus-flex-col-item-center"
            >
              <svg height="32" width="32" viewBox="0 0 16 16" version="1.1">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
              Github
            </Link>
            <Link
              href="https://www.facebook.com/chungyi.liao/"
              target="_blank"
              className="tag m-0 text-slate-500 cus-flex-col-item-center"
            >
              <svg viewBox="0 0 36 36" fill="none" height="32" width="32">
                <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
                <path
                  fill="currentColor"
                  d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
                ></path>
              </svg>
              Facebook
            </Link>
          </div>
        </LayoutContainer>

        {/* Brife intro section */}
        <LayoutContainer
          id="about-me"
          wraperClass="pt-16 pb-24 bg-slate-100"
          itemClass="cus-flex-col-item-center"
        >
          <h2 className="text-2xl font-extrabold leading-10 py-6">
            Hi,
            <span className="text-2xl font-extrabold leading-10 text-violet-600">
              I&#39;m Lyle
            </span>
            . Nice to meet you.
          </h2>
          <p className="text-center text-slate-500">
            Possess superb quantitative skills and is a hardworking and
            dedicated person.
          </p>
          <p className="text-center mt-2 text-slate-500">
            Vague trend and uncertain future have driven me to make a career
            change.
          </p>
          <p className="text-center mt-2 text-slate-500">
            Finally, I returned to my original goal, &#34;a fullstack
            developer&#34;.
          </p>
          <p className="text-center mt-2 text-slate-500">
            Eight months of effort, focused on the course of fullstack in Alpha
            Camp and grasped the essential knowledge.
          </p>
          <p className="text-center mt-2 text-slate-500">
            Now, I implement continuously to improve developer ability.
          </p>
        </LayoutContainer>

        {/* Experience section */}
        <LayoutContainer
          id="experience"
          wraperClass="pt-4"
          itemClass="cus-flex-col-item-center max-w-screen-lg"
        >
          <SectionTitle title="EXPERIENCE" />
          <ExperienceCard
            time="Mar. 2022 &#8211; Present"
            title="全端網頁應用程式工程師"
            company="新加坡商品諾科技"
            description="進行公司產品網頁前端效能優化（Nextjs React
        MUI），為期兩個月套用MUI，與hooks使用改善，提升30% fisrt load js bundle
        空間； 進行公司產品後端優化（Nestjs Typescript
        Express），解決4項penetration test 危險程度高至嚴重問題；
        持續改善雲端架構（AWS codePipeline codeBuild Beanstalk
        S3），建立基礎CI/CD流程。"
          />
          <ExperienceCard
            time="Mar. 2021 &#8211; Nov. 2021"
            title="華志營造"
            company="現場工程師"
            description="於台電大潭電廠新建員工宿舍與活動中心擔任現場工程師，負責裝修詳圖繪製、送審、監工"
          />
          <ExperienceCard
            time="Dec. 2019 &#8211; Feb. 2021"
            title="大乃綠循環科技"
            company="專案經理"
            description="擔任廠務規劃、環保能源計畫送審經理，組織團隊於6個月內完成環保判定，並取得再生能源設施設置許可證"
          />
          <ExperienceCard
            time="Jul. 2013 &#8211; Aug. 2018"
            title="中華民國海軍"
            company="輪機軍官"
            description="曾赴美接艦，期間負責輪機料配件採購與專案進度推進"
            last
          />
        </LayoutContainer>

        {/* Tech Stacks section */}
        <LayoutContainer id="techstacks" wraperClass="pb-16">
          <div className="cus-flex-col-item-center">
            <SectionTitle title="TECH STACK" />
            <div className="flex flex-wrap justify-center">
              <span className="tag">HTML5/CSS</span>
              <span className="tag">JavaScript</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Nodejs</span>
              <span className="tag">Git</span>
              <span className="tag">MySQL</span>
              <span className="tag">MongoDB</span>
              <span className="tag">GraphQL</span>
              <span className="tag">Docker</span>
              <span className="tag">Express</span>
              <span className="tag">React</span>
              <span className="tag">Redux</span>
              <span className="tag">Nextjs</span>
              <span className="tag">Material UI</span>
              <span className="tag">Ant Design</span>
              <span className="tag">chakra-ui</span>
              <span className="tag">TailwindCss</span>
              <span className="tag">Restfull API</span>
              <span className="tag">ES6</span>
              <span className="tag">AWS</span>
            </div>
          </div>
        </LayoutContainer>

        {/* Education section */}
        <LayoutContainer
          wraperClass="pb-4"
          itemClass="cus-flex-col-item-center max-w-screen-2xl"
        >
          <SectionTitle title="EDUCATION" />
          <div className="w-full grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-8">
            <EducationCard
              time="Mar. 2021 &#8211; Dec. 2021"
              title="Fullstack Developer"
              company="ALPHA Camp｜創新職涯的線上學校"
              description="此課程為非學位課程，半年期間，運用下班時間自主學習，最後兩個月離職全心投入衝刺階段，完成Final Team Project，結業獲得Specialize in Back-end認證"
            />
            <EducationCard
              time="Oct. 2018 &#8211; Aug. 2019"
              title="Pre-master in Engineering"
              company="Cranfield University, UK"
              description="此課程為非學位課程，僅獲pre-master certification, 因疫情，未完成接續的碩士學位"
            />
            <EducationCard
              time="Sep. 2009 &#8211; Jun. 2013"
              title="理學士(Bachelor of Science)"
              company="海軍軍官學校"
              description="應用科學，全系全年同級第一名畢業"
            />
          </div>
        </LayoutContainer>

        {/* Projects section */}
        <LayoutContainer
          id="projects"
          wraperClass="pb-16"
          itemClass="cus-flex-col-item-center max-w-screen-2xl"
        >
          <SectionTitle title="PROJECTS" />
          <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
            <ProjectCard
              imgSrc="./user-auth.webp"
              title="Practice: User Auth"
              list={[
                "使用Prisma建立與操作CRUD資料庫",
                "使用tRPC(zod驗證) 請求與處理資料",
              ]}
              links={[
                {
                  href: "https://github.com/liaochungyid/user-auth",
                  title: "Git",
                },
              ]}
            />
            <ProjectCard
              imgSrc="./about-me.webp"
              title="This About Me Site"
              list={["使用 tailwindCSS"]}
              links={[
                {
                  href: "https://github.com/liaochungyid/about-me",
                  title: "Git",
                },
              ]}
            />
            <ProjectCard
              imgSrc="./gama-green.webp"
              title="GAMA Green-Energy Technology SPA"
              list={[
                "使用React與Nextjs製作SPA",
                "使用Material UI (intuitive React UI tools)",
              ]}
              links={[
                {
                  href: "https://github.com/liaochungyid/gama-green-energy",
                  title: "Git",
                },
                { href: "https://gama-green.tw/", title: "Live Site" },
              ]}
            />
            <ProjectCard
              imgSrc="./iwills.webp"
              title="iWills, Pinnovation"
              list={[
                "使用React與Nextjs製作完整網頁應用",
                "使用Redux管理user state",
              ]}
              links={[{ href: "https://iwills.sg/", title: "Live Site" }]}
            />
            <ProjectCard
              imgSrc="./simple-twitter.webp"
              title="Simple Twitter"
              list={[
                "使用 Nodejs, Express, MySQL等展示簡易的Twitter功能",
                "使用Socket.IO製作公與私人聊天室功能",
              ]}
              links={[
                {
                  href: "https://github.com/liaochungyid/twitter-fullstack-2020",
                  title: "Git",
                },
                {
                  href: "https://simple-twitter-acj.herokuapp.com/signin",
                  title: "Demo",
                },
              ]}
            />
          </div>
        </LayoutContainer>
      </main>

      <footer>
        <LayoutContainer
          id="cv"
          wraperClass="pt-16 pb-32 bg-slate-100"
          itemClass="cus-flex-col-item-center flex-wrap"
        >
          <SectionTitle title="CV" />
          <div className="flex flex-wrap justify-center">
            <Link
              href="https://www.cakeresume.com/users/liaochungyid/profile?print=true"
              target="_blank"
              className="tag font-extrabold"
            >
              Download
            </Link>
            <Link
              href="https://www.cakeresume.com/me/liaochungyid"
              target="_blank"
              className="tag font-extrabold"
            >
              View in CakeResume
            </Link>
            <Link
              href="https://github.com/liaochungyid"
              target="_blank"
              className="tag font-extrabold"
            >
              Github
            </Link>
          </div>
        </LayoutContainer>
      </footer>
    </div>
  );
}
