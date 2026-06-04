import { useMemo, useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group";
import { SearchIcon } from "../../components/icons/SearchIcon";
import { CartIcon } from "../../components/icons/CartIcon";
import { AccountIcon } from "../../components/icons/AccountIcon";
import { HamburgerIcon } from "../../components/icons/HamburgerIcon";
import { ChevronLeftIcon, ChevronRightIcon } from "../../components/icons/ChevronIcons";

type ProductCardItem = {
  title: string;
  author?: string;
  price: string;
};

type ProductGridItem = {
  title: string;
  author: string;
  price: string;
};

type CarouselCardItem = {
  title: string;
  subtitle?: string;
  price: string;
  action: string;
};

export const Iphone = (): JSX.Element => {
  const [language, setLanguage] = useState("Arabic");
  const [cartCount, setCartCount] = useState(0);

  const subjectCards = useMemo(
    () => [{ title: "Aqeedah" }, { title: "Hadith" }, { title: "Fiqh" }],
    [],
  );

  const picks = useMemo<ProductGridItem[]>(
    () => [
      {
        title: "Kitab at tawheed",
        author: "Muhammad Ibn Abd al Wahhab",
        price: "₹300",
      },
      {
        title: "Kitab at tawheed",
        author: "Muhammad Ibn Abd al Wahhab",
        price: "₹300",
      },
      {
        title: "Kitab at tawheed",
        author: "Muhammad Ibn Abd al Wahhab",
        price: "₹300",
      },
      {
        title: "Kitab at tawheed",
        author: "Muhammad Ibn Abd al Wahhab",
        price: "₹300",
      },
      {
        title: "Kitab at tawheed",
        author: "Muhammad Ibn Abd al Wahhab",
        price: "₹300",
      },
      {
        title: "Kitab at tawheed",
        author: "Muhammad Ibn Abd al Wahhab",
        price: "₹300",
      },
    ],
    [],
  );

  const addOnCards = useMemo<CarouselCardItem[]>(
    () => [
      {
        title: "Kitab at tawheed",
        subtitle: "Muhammad Ibn Abd al Wahhab",
        price: "₹300",
        action: "Add to cart",
      },
      {
        title: "Kitab at tawheed",
        subtitle: "Muhammad Ibn Abd al Wahhab",
        price: "₹300",
        action: "Add to cart",
      },
      {
        title: "Kitab at tawheed",
        subtitle: "Muhammad Ibn Abd al Wahhab",
        price: "₹300",
        action: "Add to cart",
      },
    ],
    [],
  );

  const languageBooks = useMemo<ProductCardItem[]>(
    () => [
      {
        title: "Kitab at tawheed",
        author: "Muhammad Ibn Abd al Wahhab",
        price: "₹300",
      },
      {
        title: "Kitab at tawheed",
        author: "Muhammad Ibn Abd al Wahhab",
        price: "₹300",
      },
      {
        title: "Kitab at tawheed",
        author: "Muhammad Ibn Abd al Wahhab",
        price: "₹300",
      },
      {
        title: "Kitab at tawheed",
        author: "Muhammad Ibn Abd al Wahhab",
        price: "₹300",
      },
      {
        title: "Kitab at tawheed",
        author: "Muhammad Ibn Abd al Wahhab",
        price: "₹300",
      },
      {
        title: "Kitab at tawheed",
        author: "Muhammad Ibn Abd al Wahhab",
        price: "₹300",
      },
    ],
    [],
  );

  const clothes = useMemo<CarouselCardItem[]>(
    () => [
      {
        title: "Khadijah niqab",
        price: "₹300",
        action: "View options",
      },
      {
        title: "Kufis",
        price: "₹300",
        action: "View options",
      },
    ],
    [],
  );

  return (
    <main className="min-h-screen w-full bg-[#ebe7df]">
      <div className="mx-auto flex min-h-screen w-full max-w-[393px] flex-col bg-[#fffdf5]">
        <header className="relative bg-[#fffdf5] border-b border-[#d7d2c6] px-[16px] py-[12px] flex items-center justify-between">
          <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity text-black">
            <HamburgerIcon />
          </button>
          <img
            className="h-[45px] w-[92px] flex-shrink-0"
            alt="Logo"
            src="/logo.png"
          />
          <div className="flex items-center gap-4">
            <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity text-black">
              <SearchIcon />
            </button>
            <button className="w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity text-black">
              <AccountIcon />
            </button>
            <button className="relative w-6 h-6 flex items-center justify-center hover:opacity-70 transition-opacity text-black">
              <CartIcon />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#885926] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </header>
        <section className="bg-[#fffdf5] px-[23px] pb-8 pt-20 text-center">
          <p className="[font-family:'Playfair_Display',Helvetica] text-3xl font-normal tracking-[-1.80px] leading-[28.5px] text-[#885926]">
            Finally afford
          </p>
          <h1 className="mt-2 [font-family:'Playfair_Display',Helvetica] text-[40px] font-normal italic tracking-[-2.40px] leading-[38px] text-[#885926]">
            Beneficial knowledge
          </h1>
          <p className="mt-5 [font-family:'Playfair_Display',Helvetica] text-lg font-normal tracking-[-1.08px] leading-[17.1px] text-[#857461]">
            Build your first islamic library
          </p>
          <div className="mt-10 flex items-center justify-center gap-[18px]">
            <Button
              className="h-auto min-w-[157px] rounded-none bg-[#885926] px-0 py-[9px] [font-family:'Playfair_Display',Helvetica] text-lg font-normal tracking-[-1.08px] leading-[17.1px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] hover:bg-[#885926]/95"
              variant="default"
            >
              Shop now
            </Button>
            <Button
              className="h-auto rounded-none bg-transparent px-0 py-[9px] [font-family:'Playfair_Display',Helvetica] text-lg font-normal tracking-[-1.08px] leading-[17.1px] text-black shadow-none hover:bg-transparent"
              variant="ghost"
            >
              Browse add-ons
            </Button>
          </div>
        </section>
        <section className="bg-[linear-gradient(180deg,rgba(255,253,245,1)_0%,rgba(136,89,38,1)_13%,rgba(136,89,38,1)_60%)] px-[17px] pb-10 pt-16 text-center">
          <h2 className="[font-family:'Playfair_Display',Helvetica] text-xl font-normal tracking-[-1.20px] leading-[19px] text-[#f2f2f2]">
            Browse subjects
          </h2>
          <p className="mt-4 [font-family:'Playfair_Display',Helvetica] text-lg font-normal tracking-[-1.08px] leading-[17.1px] text-[#fffdf5b0]">
            Master the sciences level by level
          </p>
          <div className="mt-6 grid grid-cols-3 gap-[9px]">
            {subjectCards.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="flex flex-col items-center"
              >
                <div className="mb-3 flex w-full items-center justify-center gap-2">
                  {index === 0 && (
                    <ChevronLeftIcon inverted={true} />
                  )}
                  <h3 className="[font-family:'Playfair_Display',Helvetica] text-lg font-normal tracking-[-1.08px] leading-[17.1px] text-white">
                    {item.title}
                  </h3>
                  <ChevronRightIcon inverted={true} />
                </div>
                <div className="h-[153px] w-full bg-white" />
              </article>
            ))}
          </div>
          <div className="mt-10">
            <h2 className="[font-family:'Playfair_Display',Helvetica] text-xl font-normal tracking-[-1.20px] leading-[19px] text-white">
              Our picks
            </h2>
            <p className="mt-4 [font-family:'Playfair_Display',Helvetica] text-lg font-normal tracking-[-1.08px] leading-[17.1px] text-[#fffdf5b0]">
              Learn what we recommend for you
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-[9px] gap-y-[18px]">
            {picks.map((item, index) => (
              <Card
                key={`${item.title}-${index}`}
                className="rounded-none border-0 bg-transparent shadow-none"
              >
                <CardContent className="p-0 text-left">
                  <div className="h-[252px] w-full bg-white" />
                  <div className="pt-[7px]">
                    <h3 className="[font-family:'Playfair_Display',Helvetica] text-[17px] font-normal tracking-[-1.02px] leading-[16.1px] text-[#f2f2f2]">
                      {item.title}
                    </h3>
                    <p className="mt-[7px] w-full [font-family:'Playfair_Display',Helvetica] text-[13px] font-normal tracking-[-0.78px] leading-[12.3px] text-[#e7e7e7]">
                      {item.author}
                    </p>
                    <p className="mt-[6px] text-right [font-family:'Source_Serif_Pro',Helvetica] text-[17px] font-normal tracking-[-1.02px] leading-[16.1px] text-[#f2f2f2]">
                      {item.price}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-7 flex justify-center">
            <Button
              className="h-auto min-w-[107px] rounded-none border border-white bg-[#00000001] px-6 py-[5px] [font-family:'Playfair_Display',Helvetica] text-lg font-normal tracking-[-1.08px] leading-[17.1px] text-[#f2f2f2] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] hover:bg-white/5"
              variant="ghost"
            >
              View all
            </Button>
          </div>
        </section>
        <section className="border border-[#b1b1b1] bg-white px-[23px] pb-8 pt-[72px] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="[font-family:'Playfair_Display',Helvetica] text-[25px] font-normal tracking-[-1.50px] leading-[23.8px] text-black">
                Additional Items
              </h2>
              <p className="mt-4 [font-family:'Playfair_Display',Helvetica] text-lg font-normal tracking-[-1.08px] leading-[17.1px] text-[#857461]">
                Buy that which benefits you
              </p>
            </div>
            <Button
              className="h-auto px-0 py-0 [font-family:'Playfair_Display',Helvetica] text-[10px] font-normal tracking-[-0.30px] leading-[15.3px] text-black hover:bg-transparent"
              variant="ghost"
            >
              View all
            </Button>
          </div>
          <div className="mt-8 overflow-x-auto">
            <div className="flex w-max gap-[15px] pr-4">
              {addOnCards.map((item, index) => (
                <Card
                  key={`${item.title}-${index}`}
                  className="w-[149px] rounded-none border-0 bg-transparent shadow-none"
                >
                  <CardContent className="p-0 text-left">
                    <div className="h-[241px] w-[149px] bg-[#fffdf5]" />
                    <h3 className="pt-[23px] [font-family:'Playfair_Display',Helvetica] text-[17px] font-normal tracking-[-1.02px] leading-[16.1px] text-black">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="mt-[7px] w-[149px] [font-family:'Playfair_Display',Helvetica] text-[13px] font-normal tracking-[-0.78px] leading-[12.3px] text-[#000000a3]">
                        {item.subtitle}
                      </p>
                    )}
                    <p className="mt-[12px] [font-family:'Source_Serif_Pro',Helvetica] text-[17px] font-normal tracking-[-1.02px] leading-[16.1px] text-black">
                      {item.price}
                    </p>
                    <Button
                      className="mt-[14px] h-auto w-full rounded-none border border-[#885926] bg-[#fffdf5] px-0 py-[5px] [font-family:'Playfair_Display',Helvetica] text-lg font-normal tracking-[-1.08px] leading-[17.1px] text-[#885926] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] hover:bg-[#fff8eb]"
                      variant="ghost"
                    >
                      {item.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#fffdf5] px-[35px] pb-10 pt-[46px]">
          <ToggleGroup
            className="grid w-full grid-cols-3 border-b border-[#d7d2c6] pb-[9px]"
            onValueChange={(value) => {
              if (value) setLanguage(value);
            }}
            type="single"
            value={language}
          >
            {["English", "Urdu", "Arabic"].map((item) => (
              <ToggleGroupItem
                key={item}
                className="h-auto rounded-none border-0 bg-transparent px-0 py-0 [font-family:'Playfair_Display',Helvetica] text-lg font-normal tracking-[-1.08px] leading-[17.1px] text-[#867461] data-[state=on]:bg-transparent data-[state=on]:text-[#885926] data-[state=on]:shadow-none"
                value={item}
              >
                <span className="relative inline-block">
                  {item}
                  {item === language && (
                    <span className="absolute left-0 top-[29px] block h-px w-full bg-[#885926]" />
                  )}
                </span>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <div className="mt-7 grid grid-cols-2 gap-x-[6px] gap-y-[22px]">
            {languageBooks.map((item, index) => (
              <Card
                key={`${item.title}-${index}`}
                className="rounded-none border-0 bg-transparent shadow-none"
              >
                <CardContent className="p-0 text-left">
                  <div className="h-[252px] w-full bg-white" />
                  <h3 className="pt-[7px] [font-family:'Playfair_Display',Helvetica] text-[17px] font-normal tracking-[-1.02px] leading-[16.1px] text-black">
                    {item.title}
                  </h3>
                  {item.author && (
                    <p className="mt-[7px] w-full [font-family:'Playfair_Display',Helvetica] text-[13px] font-normal tracking-[-0.78px] leading-[12.3px] text-[#000000a3]">
                      {item.author}
                    </p>
                  )}
                  <p className="mt-[6px] text-right [font-family:'Source_Serif_Pro',Helvetica] text-[17px] font-normal tracking-[-1.02px] leading-[16.1px] text-black">
                    {item.price}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section className="border border-[#b1b1b1] bg-white px-7 pb-8 pt-[72px] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="[font-family:'Playfair_Display',Helvetica] text-[25px] font-normal tracking-[-1.50px] leading-[23.8px] text-black">
                Clothes
              </h2>
              <p className="mt-4 [font-family:'Playfair_Display',Helvetica] text-lg font-normal tracking-[-1.08px] leading-[17.1px] text-[#857461]">
                Accompany knowledge with modesty
              </p>
            </div>
            <Button
              className="h-auto px-0 py-0 [font-family:'Playfair_Display',Helvetica] text-[10px] font-normal tracking-[-0.30px] leading-[15.3px] text-black hover:bg-transparent"
              variant="ghost"
            >
              View all
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-2">
            {clothes.map((item, index) => (
              <Card
                key={`${item.title}-${index}`}
                className="rounded-none border-0 bg-transparent shadow-none"
              >
                <CardContent className="p-0 text-center">
                  <div className="h-[252px] w-full bg-[#fffdf5]" />
                  <h3 className="pt-[7px] [font-family:'Playfair_Display',Helvetica] text-[17px] font-normal tracking-[-1.02px] leading-[16.1px] text-black">
                    {item.title}
                  </h3>
                  <p className="mt-[13px] [font-family:'Source_Serif_Pro',Helvetica] text-[17px] font-normal tracking-[-1.02px] leading-[16.1px] text-black">
                    {item.price}
                  </p>
                  <Button
                    className="mt-[16px] h-auto w-full rounded-none border border-[#885926] bg-[#fffdf5] px-0 py-[5px] [font-family:'Playfair_Display',Helvetica] text-lg font-normal tracking-[-1.08px] leading-[17.1px] text-[#885926] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] hover:bg-[#fff8eb]"
                    variant="ghost"
                  >
                    {item.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <div className="min-h-[720px] bg-[#ebe7df]" />
      </div>
    </main>
  );
};
