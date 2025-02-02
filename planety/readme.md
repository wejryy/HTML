Tento solární systém je interaktívní webová stránka. 
![[Pasted image 20250202142226.png]]

<span style="font-size:30px">Funkce</span>

- **Slunce**: Zářivé, pulzující slunce uprostřed, vytvořené pomocí CSS animace pro jemný efekt záření.
- **Oběhy planet**: Čtyři planety obíhají kolem Slunce, každá má vlastní specifickou barvu a animační efekt oběhu.
- **Pozadí s hvězdami**: Přidáno pozadí s hvězdami, které simuluje vesmír, pomocí URL.

<span style="font-size:30px">Podrobnosti</span>
### HTML

- HTML struktura obsahuje `<div>` pro vesmír (`.space`), který slouží jako kontejner pro všechny prvky animace.
- Uvnitř kontejneru se nachází `.sun`, což je Slunce ve středu.
- Čtyři planety jsou umístěny v samostatných kontejnerech oběhů, přičemž každá planeta má vlastní třídu pro Merkur, Venuši, Zemi a Mars.

### CSS

1. **Styling pro Slunce**: `.sun` je stylizováno jako žlutý kruh s box-shadow pro dosažení zářivého efektu. Animace `@keyframes pulse` způsobí, že Slunce roste a zmenšuje se, čímž simuluje pulzující efekt.
    
2. **Oběhy planet**: Třída `.orbit` definuje oběžnou dráhu pro každou planetu. Tyto oběžné dráhy jsou stylizovány jako průhledné kruhy a každá dráha animuje kolem Slunce pomocí animace `@keyframes rotate`. Každý oběh má jinou velikost, aby odpovídal vzdálenosti planet od Slunce.
    
3. **Planety**: Třída `.planet` definuje vzhled každé planety jako malý kruh. Každá planeta má unikátní barevný přechod, který ji reprezentuje (šedá pro Merkur, oranžová pro Venuši, modrá pro Zemi a červená pro Mars).
    
4. **Pozadí s hvězdami**: Třída `.stars` pokrývá celou šířku a výšku prohlížeče hvězdným pozadím. Jemný vzor hvězdného prachu je aplikován pomocí pseudo-elementu `::before`.