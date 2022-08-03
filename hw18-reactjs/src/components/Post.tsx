interface PostProps {
  author: {
    name: string;
    photo: string;
    nickname: string;
  };
  content: string;
  image: string;
  date: string;
}

export function Post(props: PostProps) {
  console.log(props);
  return (
    <div className="bg-slate-900 p-5 h-[100vh]">
      <div className="container border border-slate-700 text-white m-auto max-w-screen-sm p-[16px] pl-[80px] pb-[32px] flex flex-col relative">
        <img
          src={props.author.photo}
          alt="avatar"
          className="w-[48px] rounded-[50%] absolute top-[16px] left-[16px]"
        />
        <div className="flex gap-[8px]">
          <h2 className="font-bold text-md">{props.author.name}</h2>
          <p className="text-md text-slate-400">{props.author.nickname}</p>
          <span className="text-slate-400">&middot;</span>
          <p className="text-slate-400">{props.date}</p>
        </div>
        <div className="flex gap-[8px] flex-col">
          <p>{props.content}</p>
          <img
            src={props.image}
            alt="img"
            className="rounded-[24px] max-w-fit"
          />
        </div>
      </div>
    </div>
  );
}