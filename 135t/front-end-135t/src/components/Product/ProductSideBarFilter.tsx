import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

import CategoryFilter from "./CategoryFilter";
// import ManufacturerFilter from "./ManufacturerFilter";
import PriceFilter from "./PriceFilter";
import Sort from "./Sort";

type Props = {
  onClose?: () => void;
};

const ProductsSidebarFilter = (props: Props) => {
  return (
    <aside className="text-capitalize w-100">
      <header className="products__filters-header d-flex align-items-center justify-content-between">
        <div>
          <span className="text-muted icomoon icon-tune mr-3" />
          {t("productsSidebar:search_filters")}
        </div>

        <div className="d-block d-sm-none">
          <IconButton aria-label="close" onClick={props.onClose}>
            <CloseIcon />
          </IconButton>
        </div>
      </header>

      <hr className="hr my-3" />

      <Sort />

      <hr className="hr my-3" />

      <PriceFilter />

      <hr className="hr my-3" />

      <CategoryFilter />

      <hr className="hr my-3" />

      <ManufacturerFilter />
    </aside>
  );
};

export default ProductsSidebarFilter;
