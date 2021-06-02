import './styles.scss';

type Props = {
    totalPages: any | undefined;
    activePage: number;
    onChange: (item: number) => void;
}


const Pagination = ({totalPages, activePage, onChange}: Props) => {
   
   const generateList = (amount: number) => {
       return Array.from(Array(amount).keys());
   }
   const itens = generateList(totalPages);
    return (
        <div className="pagination-container ">
         {itens.map(item => (
            <div key={item}
                 className={`pagination-item ${item === activePage ? 'active' : '' }`}
                 onClick={() => onChange(item)}
            >
            {item+1}
            </div>
         ))}

            
            
        </div>
    )

}


export default Pagination;