"use client";

import type { CSSProperties, PointerEvent } from "react";

type AnimatedLettersProps = {
  text: string;
  letterClassName: string;
  innerClassName: string;
  animationClassName: string;
  startDelayMs?: number;
  stepDelayMs?: number;
};

function isInsideActiveZone(element: HTMLElement, event: PointerEvent) {
  const rect = element.getBoundingClientRect();
  const insetX = rect.width * 0.03;
  const insetTop = rect.height * 0.08;
  const insetBottom = rect.height * 0.2;

  return (
    event.clientX >= rect.left + insetX &&
    event.clientX <= rect.right - insetX &&
    event.clientY >= rect.top + insetTop &&
    event.clientY <= rect.bottom - insetBottom
  );
}

export function AnimatedLetters({
  text,
  letterClassName,
  innerClassName,
  animationClassName,
  startDelayMs = 0,
  stepDelayMs = 35,
}: AnimatedLettersProps) {
  return text.split("").map((letter, index) => {
    const visibleLetter = letter === " " ? "\u00A0" : letter;

    return (
      <span
        key={`${letter}-${index}`}
        aria-hidden="true"
        className={letterClassName}
        data-inside-active-zone="false"
        onPointerMove={(event) => {
          const letterBox = event.currentTarget;
          const animatedLetter = letterBox.firstElementChild;

          if (!(animatedLetter instanceof HTMLElement)) {
            return;
          }

          if (!isInsideActiveZone(letterBox, event)) {
            letterBox.dataset.insideActiveZone = "false";
            return;
          }

          if (
            letterBox.dataset.insideActiveZone === "true" ||
            animatedLetter.dataset.animating === "true"
          ) {
            return;
          }

          letterBox.dataset.insideActiveZone = "true";
          animatedLetter.dataset.animating = "true";
          animatedLetter.classList.remove(animationClassName);

          void animatedLetter.offsetWidth;

          animatedLetter.classList.add(animationClassName);
        }}
        onPointerLeave={(event) => {
          event.currentTarget.dataset.insideActiveZone = "false";
        }}
        style={
          {
            "--delay": `${startDelayMs + index * stepDelayMs}ms`,
          } as CSSProperties
        }
      >
        <span
          className={innerClassName}
          data-letter={visibleLetter}
          onAnimationEnd={(event) => {
            event.currentTarget.dataset.animating = "false";
            event.currentTarget.classList.remove(animationClassName);
          }}
        >
          {visibleLetter}
        </span>
      </span>
    );
  });
}
