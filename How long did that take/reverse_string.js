const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
// first method to reverse all strings in a paragraph
const reversed1 = story.split("").reverse().join("");
console.log(reversed1)

// more efficient method to reverse all strings in a paragraph

let reversed = [...story].reverse().join('');
console.log(reversed)
