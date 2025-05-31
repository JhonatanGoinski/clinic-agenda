import type React from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div
      className={cn(
        "container mx-auto px-2 py-4 sm:mb-3 sm:px-4 sm:py-6 lg:px-6 lg:py-8",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface PageHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function PageHeader({ children, className }: PageHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:mb-3 sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface PageHeaderContentsProps {
  children: React.ReactNode;
  className?: string;
}

export function PageHeaderContets({
  children,
  className,
}: PageHeaderContentsProps) {
  return <div className={cn("space-y-1", className)}>{children}</div>;
}

interface PageTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTitle({ children, className }: PageTitleProps) {
  return (
    <h1 className={cn("text-2xl font-bold tracking-tight", className)}>
      {children}
    </h1>
  );
}

interface PageDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function PageDescription({ children, className }: PageDescriptionProps) {
  return <p className={cn("text-muted-foreground", className)}>{children}</p>;
}

interface PageActionsProps {
  children: React.ReactNode;
  className?: string;
}

export function PageActions({ children, className }: PageActionsProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>{children}</div>
  );
}

interface PageContentProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContent({ children, className }: PageContentProps) {
  return <div className={cn("space-y-6", className)}>{children}</div>;
}
