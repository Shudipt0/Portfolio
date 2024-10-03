import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-fit  md:h-screen bg-gradient-to-b from-gray-800 to-black text-white py-8 md:py-0"
    >
      <div className="max-w-screen-lg px-4 md:px-10 lg:p-20
      xl:px-10 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-2xl md:text-4xl font-bold inline border-b-2 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-8 md:mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          rerum voluptates corporis minus tempore, consequatur eveniet nulla a
          facilis aut consectetur eos molestias, sit non soluta repudiandae
          iusto maiores deserunt nisi labore perspiciatis! Rem sit quo hic
          assumenda eaque repellat, eveniet magnam natus ipsa deserunt a
          consequatur ab. Non, similique.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          fugit voluptas ullam dolore, natus dignissimos, autem culpa quia
          molestias accusantium vero, similique fugiat. Architecto consequuntur,
          exercitationem et provident inventore aliquid quisquam labore laborum
          nobis porro tempora obcaecati quaerat, quos nam dolor nihil enim vel
          cupiditate asperiores. Maxime nam saepe in!
        </p>
      </div>
    </div>
  );
}

export default About;
