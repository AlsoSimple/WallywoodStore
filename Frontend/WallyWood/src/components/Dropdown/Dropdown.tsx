// Dropdown for sorting options (price ascending/descending or by name)
interface DropdownProps {
  setSelectedSort: React.Dispatch<React.SetStateAction<string>>;
}  

export function Dropdown({ setSelectedSort }: DropdownProps) {
  
    return (
    <select onChange={(e) => { console.log('Sort changed to:', e.target.value); setSelectedSort(e.target.value); }}>
        <option value="asc">Pris - stigende</option>
        <option value="desc">Pris - faldende</option>
        <option value="name">Titel</option>
    </select>
  );
}