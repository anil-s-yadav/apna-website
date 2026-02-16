import { Search, FileText, Eye, CreditCard, Zap } from "lucide-react";

const HowWeWork = () => {
  const steps = [
    {
      number: "01",
      title: "Choose a Template",
      description:
        "Explore our collection of professionally designed templates.",
      icon: Search,
    },
    {
      number: "02",
      title: "Customize Your Website",
      description:
        "Add your business information and personalize your content.",
      icon: FileText,
    },
    {
      number: "03",
      title: "Go Live",
      description: "Launch your website and start serving customers.",
      icon: Zap,
    },
  ];
  const colorStyles = [
    {
      icon: "text-purple-600",
      bg: "bg-purple-100",
      number: "bg-purple-600",
    },
    {
      icon: "text-orange-500",
      bg: "bg-orange-100",
      number: "bg-orange-500",
    },
    {
      icon: "text-emerald-600",
      bg: "bg-emerald-100",
      number: "bg-emerald-600",
    },
  ];

  return (
    <div className="space-y-10 items-center">
      {/* Desktop Layout */}{" "}
      <div className="hidden sm:grid grid-cols-3 relative ">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const colors = colorStyles[index];

          return (
            <div
              key={step.number}
              className="flex flex-col items-center text-center relative"
            >
              {/* Connector Line (cleaner & spaced) */}
              {index !== steps.length - 1 && (
                <div className="absolute top-8 left-[60%] w-[80%] h-[2px] bg-muted -z-10 rounded-full" />
              )}

              {/* Icon Circle */}
              <div className="relative mb-4">
                <div
                  className={`h-16 w-16 rounded-full flex items-center justify-center ${colors.bg}`}
                >
                  <Icon className={`h-6 w-6 ${colors.icon}`} />
                </div>

                {/* Number Badge */}
                <div
                  className={`absolute -bottom-2 -right-2 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow ${colors.number}`}
                >
                  {step.number}
                </div>
              </div>

              <h3 className="text-sm font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 max-w-[160px]">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
      {/* Mobile Layout */}
      <div className="sm:hidden space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const colors = colorStyles[index];

          return (
            <div key={step.number} className="flex items-start gap-4">
              {/* Number + Icon */}
              <div className="relative mb-4">
                <div
                  className={`h-16 w-16 rounded-full flex items-center justify-center ${colors.bg}`}
                >
                  <Icon className={`h-6 w-6 ${colors.icon}`} />
                </div>

                {/* Number Badge */}
                <div
                  className={`absolute -bottom-2 -right-2 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow ${colors.number}`}
                >
                  {step.number}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowWeWork;
