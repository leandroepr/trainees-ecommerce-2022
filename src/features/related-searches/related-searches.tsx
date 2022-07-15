import { classNames } from "helpers/class-names";
import Link from "next/link";

const RelatedSearches: React.FC = () => {
  const relatedList = [
    "roupas femininas",
    "camisas masculinas",
    "body feminino",
    "cropped",
    "conjuntos femininos",
  ];

  return (
    <div className="flex">
      <h3 className={classNames("font-bold text-gray-700")}>
        Buscas relacionadas:
      </h3>
      {relatedList.map((relatedItem, i) => (
        <Link key={relatedItem} href={relatedItem}>
          <div>
            <a
              className={classNames(
                "ml-2 cursor-pointer text-gray-500 font-normal"
              )}
            >
              {relatedItem}
            </a>
            <span className={classNames("ml-2")}>
              {i < relatedList.length - 1 ? "-" : null}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RelatedSearches;
