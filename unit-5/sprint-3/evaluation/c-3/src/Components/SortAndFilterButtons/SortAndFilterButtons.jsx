export const SortAndFilterButtons = ({ handleSort }) => {
  return (
    <div className="sortButtons">
      <button onClick={()=> handleSort('AT')} className="sortByTitleAsc">Asc Title</button>
      <button onClick={()=> handleSort('DT')} className="sortByTitleDesc">Desc Title</button>
      <button onClick={()=> handleSort('AP')} className="sortByPriceAsc">Asc Price</button>
      <button onClick={()=> handleSort('DP')} className="sortByPriceDesc">Desc Price</button>

      {/*
        Create 4 sorting buttons here to sort by following criteria:

        sort title in Ascending order  class: sortByTitleAsc
        sort title in Descending order class: sortByTitleDesc
        sort price asending order      class: sortByPriceAsc
        sort price descending order    class: sortByPriceDesc

        on every button click, call the reusable sorting function
        you received from Parent component, 
        and sort the data.

      */}
    </div>
  );
};
