import { Link, useSearchParams } from "react-router-dom";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  if (totalPages <= 1) return null;
  
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="mt-10 flex items-center justify-center gap-2">
      {pages.map((p) => {
        const active = p === currentPage;
        return (
          <Link
            key={p}
            to={`${basePath}?page=${p}`}
            className={[
              "min-w-9 inline-flex items-center justify-center rounded-md px-3 py-2 text-sm transition",
              active
                ? "text-[#E5E7EB]"
                : "text-[#94A3B8] hover:text-[#E5E7EB]",
            ].join(" ")}
            style={
              active
                ? { boxShadow: "inset 0 -2px 0 0 #A3E635" }
                : { borderBottom: "1px solid transparent" }
            }
            aria-current={active ? "page" : undefined}
          >
            {p}
          </Link>
        );
      })}
    </nav>
  );
}