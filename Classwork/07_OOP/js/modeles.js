import {Post} from"./post.js";

let post = new Post("Lorem ipsum","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, impedit deleniti! Ex nam nihil amet consequatur impedit nisi in, fuga maxime tenetur reiciendis debitis, sed dolores harum necessitatibus fugiat perspiciatis.")

// document.writeln(post.get());
document.body.innerHTML = post.get();