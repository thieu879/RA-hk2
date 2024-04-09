import { createPost, includeByTitle } from "./manangerPost.js";

let listPost = [];
const MAXPOST = 5;
class Post {
  constructor(title, author, content) {
    (this.title = title), (this.author = author), (this.content = content);
  }
}

createPost(
  listPost,
  Post,
  MAXPOST,
  "Roshidere",
  "SunSunSun",
  `Alisa Mikhailovna Kujo (Alya)[a], học viên tại trường tư thục Seirei Gakuen, là một nữ sinh gốc Nga, với mái tóc bạch kim, xinh đẹp đến nỗi bất cứ ai cũng có thể quay lại nếu cô ấy bước đi. Nhân vật chính, Kuze Masachika ngồi cạnh Alya, một con người không có động lực, chỉ ngủ ở trường và thường xuyên phàn nàn bị phàn nàn. Vì một số lý do, Alya đôi khi nói bằng tiếng Nga. Tuy nhiên, Alya không hề biết rằng, Masachika cũng biết tiếng Nga.`
);
createPost(
  listPost,
  Post,
  MAXPOST,
  "Mobuseka",
  "Mishima Yomu",
  `Leon – kiếp trước là một nhân viên công sở tại Nhật Bản, vì bị đứa em gái ép hoàn thành hộ Otome game mà kiệt sức rồi chết, đã chuyển sinh sang chính thế giới Otome game đó, nơi có kiếm và phép thuật, và là thế giới trọng nữ khinh nam. Tại thế giới này, đàn ông chỉ như loài súc vật với nhiệm vụ duy nhất là cung phụng phái nữ. Chỉ có Hoàng thái tử cùng nhóm trai đẹp mà ngài dẫn đầu là ngoại lệ.

Trong thế giới phi lý này, Leon có một vũ khí. Đó chính là tri thức về trò chơi mà cậu bị cô em gái ép phải chinh phục cho bằng được ở kiếp trước. Sử dụng tri thức ấy, Leon bất ngờ chống lại những cô gái thích gì làm nấy và đám trai đẹp.`
);
for (const key of listPost) {
  console.log(key);
}

includeByTitle(listPost);
