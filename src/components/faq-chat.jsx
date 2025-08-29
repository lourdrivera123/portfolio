"use client";

import * as React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Circle, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function FaqAccordion({
  data,
  className,
  timestamp = "Every day, 9:01 AM",
  questionClassName,
  answerClassName,
}) {
  const [openItem, setOpenItem] = React.useState(null);

  return (
      <div className="relative min-h-auto w-full flex flex-col items-center justify-center overflow-hidden px-6">
      {/* <motion.div
        custom={0}

        initial="hidden"
        animate="visible"
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 dark:bg-zinc-800/50 dark:border-zinc-700/50 mb-8"
      >
        <Circle className="h-2 w-2 fill-rose-500/80" />
        <span className="text-sm text-zinc-600 dark:text-zinc-400 tracking-wide">
          Frequently Asked Questions
        </span>
      </motion.div> */}
    
    
    <motion.h2
      custom={1}
      initial="hidden"
      animate="visible"
      className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-left w-full"
    >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
         FAQ
        </span>
      </motion.h2>
      <div className={cn("flex flex-col justify-center mx-auto items-center ", className)}>
        {timestamp && (
          <div className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">{timestamp}</div>
        )}

        <Accordion.Root
          type="single"
          collapsible
          value={openItem || ""}
          onValueChange={(value) => setOpenItem(value)}
        >
          {data.map((item) => (
            <Accordion.Item
              value={item.id.toString()}
              key={item.id}
              className="mb-2"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-start justify-between gap-x-4 text-left">
                  <div
                    className={cn(
                      "relative flex items-start space-x-2 rounded-xl p-3 transition-colors flex-1 min-w-0",
                      openItem === item.id.toString()
                        ? "bg-teal-100 text-teal-700 dark:bg-teal-900/20 dark:text-teal-400"
                        : "bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100",
                      questionClassName
                    )}
                  >
                    {item.icon && (
                      <span
                        className={cn(
                          "absolute -top-1 text-lg",
                          item.iconPosition === "right" ? "-right-1" : "-left-1"
                        )}
                        style={{
                          transform: item.iconPosition === "right"
                            ? "rotate(7deg)"
                            : "rotate(-4deg)",
                        }}
                      >
                        {item.icon}
                      </span>
                    )}
                    <span className="font-medium leading-relaxed pr-2">{item.question}</span>
                  </div>

                  <span
                    className={cn(
                      "text-zinc-500 dark:text-zinc-400 flex-shrink-0 mt-1",
                      openItem === item.id.toString() && "text-teal-600 dark:text-teal-400"
                    )}
                  >
                    {openItem === item.id.toString() ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content asChild forceMount>
                <motion.div
                  initial="collapsed"
                  animate={openItem === item.id.toString() ? "open" : "collapsed"}
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="mr-4 mt-3 md:mr-12 flex justify-end">
                    <div
                      className={cn(
                        "relative max-w-md rounded-2xl !bg-white !border-zinc-200 px-4 py-3 !text-zinc-900 shadow-sm",
                        answerClassName
                      )}
                    >
                      {item.answer}
                    </div>
                  </div>
                </motion.div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
      </div>
  );
}