import breadBaronImg from '../../../assets/bread_baron_circle.png'

export default function WelcomeHeader() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
      <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 transform hover:rotate-3 transition-transform duration-300 cursor-pointer">
        <img
          alt="Bread Baron Character"
          className="w-full h-full object-contain drop-shadow-xl"
          src={breadBaronImg}
        />
      </div>
      <div className="text-center md:text-left">
        <h1 className="font-display text-5xl md:text-7xl text-primary bubbly-text tracking-wide mb-2">
          Bread Baron
        </h1>
        <p className="font-display text-lg md:text-2xl text-textSecondary dark:text-amber-100/60 font-medium">
          Build your bread empire
        </p>
      </div>
    </div>
  )
}
