import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";

const data = [
  {
    id: 1,
    title: "Html",
    img: "https://cdn.iconscout.com/icon/free/png-256/html5-2474813-2056052.png",
  },
  {
    id: 2,
    title: "Css",
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAAAD///9PT0+kpKT8/PyZmZn39/cyMjK9vb3m5ubd3d23t7c3Nzfp6env7++rq6tiYmKysrKNjY3Dw8NCQkKfn593d3fJycmGhoZqamrR0dEbGxvh4eHW1tbNzc1ZWVl+fn4eHh4lJSVISEgTExM9PT1vb28LCwt6enpVVVUsLCw0NDSXW8hOAAAL0klEQVR4nOWde1/bOBOFMXGcKwm5pzRAgBAK/f7f7yXZdrdYc+ZIY1kqvOe/7f5s9Di2NJqbLoo/NFxefgUth39CXXwgvPgawoS73EOLpB0knBxyjy2KDhNIWPZyDy6KeiUkLJ5yDy6KngpM+Jp7cFH0qhAecw8uio4K4Tb34KJoqxB2cg8uijoK4SL34KJooRBucg8uijYK4W3uwUXRrUJ4lXtwUXSlEBa5BxdFhUb4knt0EfSiEn4Fw7SnEn4Fs+1VJVznHl4ErVXCbu7hRVBXJZzmHl4ETVXCUe7hRdBIJbzLPbwIulMJB7mHF0EDlbDMPbwIKlXCr2C21Ylq//099/ga6zsh/PzetidC+C33ABvrGyH8/L6oLSH8/GZblxB+fm9bhxD2cw+wsfqE8PP7om4J4ef3RV0RwknuATbWhBBWD7lH2FAPFSEsn3MPsaGeS0JY3OceYkPd14Ecws9uttWNNpfwR+4hNtQPSkjNtnkno/gbVjfaXMIZu8VN/YqUWlHCWf0Sh5D6oqb1K1JqTwnv6pc4hNRsm6dhkXVJCetGm0tIc9vW9StS6pESDuuXOIRXLMB2mYZFFgV8qZulLmHJHtP3utGQUpTw0RmdQ1iM2U0yEnKH9di5xiWk3jbnPUinG0pY97RJhNfsJhvnkmTi+T7XzjUuIfW2ZVwQqTnieNokQuqLcuyidJpTwrofSiKkIcSjc0ky8dzJkXONS0jf9ecULLK4SbNwrnEJubctBYss7oBwjDaBkHvbUrCIKt/o2NylTBguvcvOvSaNqEUpPX0LYbYF0aPixb1I+CfqT3Tnq0TiU8SDe5FASM22bAsiN2lco00ipIuO485KJR4YE9ZqgZD6ooQHlUY8fCu8XgIhfVI995o04iaNa7RJhNS8PdSDH6lEtz2up00k5An7w6JsoMq8hV7SkQkLmUDYchXiYT5w/6aHqhkHlIwRgbBqk+96Y/sFB3OvsF89tJac0PjzFTf8CwwhLFsKki6FacBH5Ywb3L/0ILwg0kbB430P19Hd13hpNw8o3V0KN5AIfV8Jfz12jAvMXdhYXD+UTLiPzPdq3YxMQ8s/9p6E3N8ToIetcXYZGIYhRY0kQh6k89blTJjdfHRniravPAmjJeyvjbNLMTVmhEg7V4kwTubX48r4813ZvxLpiUqEMcy2a+vsEjh7fpTkQZIIG5ckvMyNzqpq2mwtliY1iXDSLJ19PDJuHq62Dcsfv0urrkRY0hCiIvPsctc8G2ssPVrRvcud5+hPrIy2S2WdPT9IDMCLhManad0ZFYNtnLYxTk4bJDS1x5hbY8MRXs9fEqNiImH4gvRk3BkVk2DbU5GY6iMShtZZmmeXXdPZ86PE6LRIGNQe42DdGRWb2LmsbvAQEQbUWd5bbZdqGt+V4OS0QULfrmaPVr/L++sZHe9CyPiChH4lCZcjo2ldLFpKtRZnc5Gw9Fie1uID81C1aqvG8SAux3LImqYA7q0/3/vWfd61iRI+in9QJqSGaYasIV7r4ua0nSQT0u8kQ5CUT3+i0QYIacJ+hjRavoQ5afpnyYTUF/UqXtaquBki+aEQIQ0hyq98q+JZe7JtLBPSOst6SXgC8bm0Xlv5j2RCnqnaJoss3jpHrgSRh8p9Ueb10Czug5NNSPBj0Lulz/zirhX5OiuhdUdoF/czyteBf6aGafLctoqGSQ/yhYCQPjBxs9mmeF6iFB4tICGN/CQ3THmoASSjAULqi0pe38XNUjAkQEiXV9kGbFF8iQa7AUBIvW1SxLxVcaMNfDiAkJq5ySvYeGAaTH6AkL71yTMwuesKuFUAId1Q91KbbdwsBW5bK6EYqmtTPHMhjJC3x7B6Sq2i2edOQ4xfAoQlNWoSm968mGQJQntoo0f3KokJecIkWr8QIU/Yn2/nv/Tbobk66Z/eB9OzZieNHPU/avGH4HPjhKikDhHu6R1bkexMKnwCDVJOm0aYqauZ7GopGhhtkJAbSa0Ibsp4DzIUhUaE/Jm1Irix5uUyqCMJIsx0MBJsnMK/GhQLQ4SZDkaCITuePIGmYUSY6WAkaClRow0W8iBC7vhpRdCepzbWG7oUOq9bSdinQqPhzj/gh1IIzbltjQQJ6ZVwSw7vmaWrGQ740Eth2SckzNKMFgbtuNHmNsRghHyJHfdk/bRPw/BV46nnQm0lIeRmUlnJKvZmQujB4wFgaNFCQl5nCf0Y9noNtD/wKJCA9h4k5O8FDD/Zj5CAKR78lnA0kJB/2/Cp2StS4MfEjTaYvwsJ+RkCsLWC/eQvGO/hWcswAbvBGgvTgu1WO7ylNQCsElLDFIaf7GW2cANM09DeDIT0seG8KDOhmAJ7Ek0lxHEUTEhffTmNrBEh2h5W1IjAzaswId1V435R5vR7tMTy7BecSogJ6RKEX33zyV/ohnxxxlF3TEhXNdwi0nzyF7oh94vhrkCYkK9qcJE170vsY8HZL5iQr2rQbWR1Jz+gG3KjDYdRMCE3aqDrz3pIBpy7uNGGa8qUJEN6V7h6WQ1TmJfLm4wrGPh/0aIB+HVbHebQE0FjfUq+q0JIvW1wDbIWEsPtIc2sh542lZD6ouCAjMeAvKBFjUeklfZjCiGd8+FtLe7k5QoX4VTULIV+KJWQTmDYMC0m/R8B5dK99UJNXuHFJEqanUJI53ySNTTo//BxnF93aAUV/66hc0AlpN42njVUTkZ77Q173G58Mo+48QE9bSohNXc9+7ZNRmtx4bmf+tZGc6NNScpWCPmM6F+9vRsdP3yXy+1dQGU7D7krI2lEGJQXVe5m6/MbezjOAhOquJ1rI+TtMYIT9svBtHsb3paAzupalp1CyA9GUr7vqNqzgThHIP0hrbyHbtWVOTqqqFmqldJphPTGqdLZ6bKq5WRrhNQZodhKUUUnBK3gUyOkH3ii/vN8L669TBoh9R0kSmfnhFp9i0ZITYlE7Xa5WapVYWmEfKue5kAWXuOsnbKlEfLctjSE3O2j7U40Qm62pUnY575EzUDWCHnCfppkb7pRRWn6Z6klyzTCMl4NW39RqwWN86kznkros0V/229afFd3HZ8mg4qnjRB6tjA83Iduh7xU3m09m7iphXQq4d7vD5z0No97LuJkFtClB7o1KWFg6s+6H+d9rW7nYR34YA0DJQyPP9wrXk8/XfWP/AjAmtQjRVTCoK5mv9Xb2ivZhytawCVJLSxXCc0lCdez8Pe1XOytf06dAlTCJseQP3WHAUWYA69VAUn1+elNShr81Yuzs97np3xfFRomlesMLRKedEncvpPZdfPWiQ0IoxRdPM5v5Pe1uu026Xb7r0BDDC/CWCUJh+Oo/lNe9dexGieqRhshjJmwf7n6z4E8XMUsdtBPZ9IJo3bYv7h42W7K91UhbtNS5tTUCSN22P+tFipVVKONENoztlNK7ySjE5rMtuTSuwHphJnqLAOlG/s6YasHI0WTbh3+vxOWbbWLjSlyFDppD5inzjJMuknDCOMfjBRfpKETITTnMycU6RZLCLPUWQaKxGkJYQtmW3TpRhsjjHYwUosih/cSwkztMYJEXNGEMFPziCCRABghbHwwUgKRmAkhzNQeI0QsQ5IQVj9zA1D9JG5Z1tTZ5GVPKtbfkBG2dBJFRCnZ5l6EWdpjBImdg05bj990/+b9xbJLA7M+zdUni/3fSLnce4VFfNvHD2brv2nhOKy9UwcCGuSXcT3Vdl0G5biEHgGwCQyxx9bzPDTCHEpYnGph1lFCRsEar/uGrBYDYXHKue+kXka+dQa29Csb4Vk33VQv7DNfE1ohLM7rSNuUz35rQluEJ+1mx5aOm794OM6aZz82JyzO64i5jQLUa6S8xyiEZ23m8WbYcfCagBWPsIi0jtjWBKyohMWpQq3ROvKts4udkhub8KTSto68rwltJBy3QXhStdiHvLDjvV7r3EBtEZ70vo74JFI+xlgTsNokfFc1XOl+kPtVSIKfRS0TnrWZy0n/vYhrAlYKwuKc4/XRL/lz3beech2oRITFh3WkhTUBKx3hSeXt6nplKHVuov8Bzzq2x0/uuLQAAAAASUVORK5CYII=",
  },
  {
    id: 3,
    title: "JS",
    img: "data:image/png;base64,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",
  },
  {
    id: 4,
    title: "JQuery",
    img: "https://www.svgrepo.com/show/333559/jquery.svg",
  },
  {
    id: 5,
    title: "Wordpress",
    img: "https://img.freepik.com/free-icon/wordpress-logo_318-9519.jpg",
  },
  {
    id: 6,
    title: "Shopify",
    img: "data:image/png;base64,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",
  },
  {
    id: 7,
    title: "Material-ui",
    img: "data:image/png;base64,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",
  },
  {
    id: 8,
    title: "Material-ui",
    img: "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-black.svg",
  },
];

const lama = [
  {
    id: 1,
    title: "React",
    img: "https://static-00.iconduck.com/assets.00/react-icon-512x456-5xl7nmtw.png",
  },
  {
    id: 2,
    title: "Next",
    img: "https://ui-lib.com/blog/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png",
  },
  {
    id: 3,
    title: "Node",
    img: "data:image/png;base64,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",
  },
  {
    id: 4,
    title: "Mongodb",
    img: "data:image/png;base64,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",
  },
  {
    id: 5,
    title: "Redux",
    img: "https://pbs.twimg.com/media/CcCHrjKWoAABwdH.jpg",
  },
  {
    id: 6,
    title: "Typescript",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968421.png",
  },
  {
    id: 6,
    title: "Tailwind",
    img: "https://cdn.iconscout.com/icon/free/png-256/tailwind-css-5285308-4406745.png",
  },
  {
    id: 7,
    title: "Firebase",
    img: "https://static-00.iconduck.com/assets.00/firebase-icon-372x512-1lrvvni7.png",
  },
];

const Murquee = () => {
  return (
    <Flex
      flexDirection="column"
      gap={{ base: 14, md: 20 }}
      my={{ base: 8, md: 10 }}
    >
      <Marquee>
        {data.map((item) => (
          <Box
            id={item.id.toString()}
            textAlign="center"
            mr={{ base: 14, sm: 20, md: 24 }}
          >
            {/* <Text fontSize="12"> {item.title}</Text> */}
            <Image w={"50px"} h={"45px"} src={item.img} />
          </Box>
        ))}
      </Marquee>
      <Marquee direction="right">
        {lama.map((item) => (
          <Box
            id={item.title}
            textAlign="center"
            mr={{ base: 14, sm: 20, md: 24 }}
          >
            {/* <Text fontSize="12"> {item.title}</Text> */}
            <Image w={"50px"} h={"45px"} src={item.img} />
          </Box>
        ))}
      </Marquee>
    </Flex>
  );
};

export default Murquee;
