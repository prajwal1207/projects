import Link from "next/link";

const Breadcrumb = ({ crumbs }) => {
  return (
    <nav className="w-full max-w-4xl mx-auto p-4">
      <ol className="list-reset flex text-gray-800">
        {crumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            {index < crumbs.length - 1 ? (
              <Link href={crumb.href} className="text-blue-850 hover:underline">
                {crumb.label}
              </Link>
            ) : (
              <span className="capitalize text-gray-500">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
