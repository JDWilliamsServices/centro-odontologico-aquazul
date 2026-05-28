import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section className={cn("px-5 py-20 lg:px-8", className)}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-aqua-700">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
          ) : null}
        </div>
        {children ? <div className="mt-12">{children}</div> : null}
      </div>
    </section>
  );
}
