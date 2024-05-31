import React, { useEffect, useState } from 'react'

export default function Bt6() {
  const [index,setIndex]=useState<any>(0)
    const handleScroll = () => {
      const ScrollPosition = window.scrollY;
      setIndex(ScrollPosition);
    }
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    document.title = `vị trí thứ: ${Math.floor(index)}`
  return (
      <div>
        Bt6:
        <br />
        <p onScroll={handleScroll}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, quas. Sequi omnis velit facilis ex et necessitatibus! Porro omnis labore vitae, nobis est sequi! Exercitationem fugit tempore beatae earum eos.
        Harum ut, a odio ab deserunt officia dolore perspiciatis necessitatibus mollitia totam dolor optio alias vitae eaque numquam. Quidem maiores maxime, deserunt dolores exercitationem illum perferendis illo eaque fuga commodi?
        Corrupti iure quia molestiae, quod voluptatum laborum est tempora nulla neque, deleniti soluta vero cupiditate assumenda aut voluptas dolores, numquam dolore. Repellendus voluptates optio, doloremque ipsam obcaecati recusandae nulla tempora!
        Vel repellat nulla mollitia commodi culpa tenetur reprehenderit animi exercitationem possimus dolore cupiditate officia expedita, quod aut cumque assumenda tempora enim totam, labore, quos ducimus. Nulla sequi pariatur maiores cum?
        Nihil aliquam maxime exercitationem delectus molestiae iste temporibus eaque. Tenetur inventore eveniet atque? Consequatur perspiciatis architecto, perferendis molestias nesciunt inventore culpa quas a veritatis earum non itaque repellendus hic id?
        Nisi eius praesentium amet in expedita quia sint est fugiat? Autem alias placeat velit in fugiat iure impedit quibusdam cum reprehenderit perspiciatis porro, quo ducimus, neque asperiores? Nisi, odit nostrum?
        Incidunt obcaecati, harum error ullam velit alias ipsam eligendi delectus ex ipsum culpa quaerat quam totam, perferendis pariatur nobis repellendus beatae modi aliquid impedit quia. Repellat nostrum ratione ad inventore!
        Delectus rem adipisci nam doloremque praesentium, reiciendis quam est quasi animi sed porro odio expedita excepturi, perferendis totam reprehenderit repellat! Fugiat ea fugit distinctio numquam, nihil ipsam id commodi. Assumenda?
        Deleniti exercitationem itaque veniam incidunt possimus consequatur id nesciunt dignissimos, earum aut minima. Voluptatibus deleniti ratione optio facere? Nostrum recusandae similique repellat, pariatur qui nulla in delectus iusto natus doloremque.
        Adipisci soluta illo asperiores eius explicabo, ut aspernatur aperiam, neque animi quam iusto maxime ea nihil. Facilis, deleniti odio! Ullam, veniam exercitationem aperiam debitis dolorum natus accusantium voluptas provident ipsam.
        Molestias quasi a eaque aut, minima vero, repellendus consequatur rerum cum omnis unde, aliquid maxime nam molestiae dignissimos pariatur doloremque commodi autem! Numquam reiciendis, nobis optio rerum omnis architecto? Reprehenderit!
        Ducimus earum ipsum eius. Enim tenetur odit commodi minima necessitatibus soluta perspiciatis quia laborum architecto! Impedit delectus adipisci laborum dolores enim incidunt quam tenetur sequi ratione? Beatae illum adipisci magnam.
        Libero velit corrupti voluptatem quia? Laboriosam, illo quos accusamus eveniet modi architecto adipisci facilis! Eum voluptatum rem esse ipsa dolorem temporibus impedit, officia et illo porro cumque nesciunt atque eius.
        Quia saepe aut accusantium impedit necessitatibus asperiores eaque, porro molestiae aperiam eligendi et corporis! Accusantium, reiciendis quae temporibus illo officiis ducimus excepturi, eius magni alias quaerat quas autem sint earum!
        Earum quidem ipsam rem molestias mollitia laudantium facere quasi nemo quia, impedit minus commodi enim ratione soluta culpa ex in, consectetur delectus temporibus, distinctio eligendi? Quae, aspernatur? Deleniti, facilis. Qui?
        Dolores ut consequuntur fugit expedita voluptatibus eum voluptatum, maiores voluptatem. Expedita fugit ad repudiandae fugiat fuga, harum a quia adipisci dignissimos eum perspiciatis consequuntur minima architecto impedit obcaecati dicta id?
        Eius minus dolorem, facilis dolorum, quod cumque architecto atque perferendis impedit, nam aspernatur eaque! Consequatur nobis, dolores nesciunt soluta harum similique recusandae sint, facere, aliquam illum dolore voluptate ducimus. Nam.
        Excepturi quia ipsam nesciunt sed eligendi quam ullam aliquid laborum consectetur doloribus nobis, amet ipsum, vel asperiores quidem id facere aperiam molestias deleniti dolorum dicta rem in debitis? Repudiandae, odio.
        Beatae suscipit totam odit pariatur maxime incidunt veniam qui, hic quia et autem animi optio amet unde! Quae maxime, eveniet natus in amet possimus facere iusto praesentium sunt asperiores voluptas?
        Odio nostrum eaque veniam, facilis asperiores consequuntur molestias nihil quidem molestiae aperiam aliquam, corrupti repellat? Officiis minima, perspiciatis neque molestiae esse quo nulla. Sint eum, debitis quisquam accusantium blanditiis voluptates?
        Consequuntur iusto pariatur vero minus distinctio saepe qui? Sapiente quisquam laudantium alias animi voluptatem incidunt eveniet dolorem hic accusamus deserunt assumenda magni ducimus officia illo, fugit id veritatis odio quasi.
        Iste, perferendis aut. Consequuntur id cumque quaerat tempore doloribus molestiae sapiente sit vel officia fugit quia, dicta qui doloremque veniam dolores eum omnis. Dignissimos iste, nesciunt commodi quas quasi illum.
        Tempore quas provident dicta ullam, obcaecati a. Velit totam nemo consequatur nostrum reiciendis quia ipsam sequi earum hic ducimus a vel quibusdam ut dolorum enim nihil placeat quisquam, rem sit.
        Debitis dolorem corporis facere ullam earum beatae tempora enim nobis voluptatibus neque et, consequuntur vel quos, labore, magni natus veniam sapiente. Omnis repellat, corrupti porro iste eum minima assumenda vel.
        Soluta, quos adipisci. Provident voluptate temporibus quas autem excepturi atque omnis nisi ratione deserunt! Corporis quam dolor ex eos itaque porro autem esse at maxime iusto, magni totam accusantium suscipit.
        Aperiam rerum possimus, vero animi facere non aut earum unde vel ad iure sunt. Delectus modi quia eius. Eum qui accusamus, possimus aperiam perspiciatis facere illo quae. Iure, vitae veniam.
        Laborum corporis expedita nihil dignissimos? Nam nulla laborum cumque veritatis quidem illo dolorum veniam! Magnam assumenda ducimus harum perferendis eum commodi eos aperiam porro dicta. Dolor corporis fugit nobis dolore.
        Aperiam deserunt perferendis iusto ipsa incidunt modi, accusantium dignissimos, debitis aut odio at non! Doloremque fugiat quis voluptatem quaerat possimus praesentium, veniam voluptatum. Minima blanditiis quos voluptatum expedita rerum quis.
        Reprehenderit sed expedita deleniti ut consectetur, dolor ad magni possimus, odit, voluptates odio dignissimos obcaecati. Ipsum atque quia consequatur, quasi nisi iure natus mollitia in debitis eum animi minus. Obcaecati?
        Vitae eaque voluptates ab repudiandae, quasi architecto odio aliquam, dolorem expedita hic, accusantium alias beatae voluptatibus soluta reiciendis ipsa nostrum? Ullam quaerat dolorum facere alias atque nulla earum, culpa tempore.
        Maiores omnis laboriosam quae doloribus ea minus totam nihil atque illum, perspiciatis, ab molestiae soluta tempora at nobis. Beatae odit incidunt quasi veritatis expedita labore ab velit provident illum aut!
        Ullam eaque ab minus suscipit quidem nobis ipsa accusantium et ipsum delectus? Cum nisi dolorem repellendus labore suscipit excepturi, dicta unde assumenda ex similique dolores optio ea cumque error expedita?
        Numquam laboriosam provident ad asperiores, quas rem laudantium non distinctio nihil, nulla, aperiam reiciendis animi eius incidunt consequuntur! Laborum tempore aperiam nesciunt inventore accusamus id! Earum sed corporis quia iure!
        Ex dolore quidem officiis natus ipsum quos nulla corporis ullam nobis laboriosam nemo, praesentium impedit ipsa voluptate adipisci voluptatibus? Tenetur obcaecati maxime quod iste at dolorum porro nihil illo vel!
        Recusandae totam molestiae dignissimos suscipit ab possimus, nesciunt animi laudantium ex iusto dolorum ipsam voluptatum nemo id saepe dicta eum eaque. Labore consequatur consectetur, vel excepturi explicabo beatae consequuntur quibusdam!
        Quisquam dignissimos nemo tempore placeat vitae tenetur hic ex, culpa in optio eaque inventore facilis quae nihil ratione repellat, molestias blanditiis. Asperiores amet accusamus libero, soluta facilis eos rerum fugit?
        Sapiente, obcaecati. Rem, nesciunt earum accusantium et quibusdam sunt placeat magnam maxime praesentium enim porro nostrum, facere atque ratione ex quod qui sapiente ad dolore impedit libero alias! Ut, voluptatum.
        Voluptatem doloribus nam nesciunt quae dolores expedita possimus dolorem deleniti exercitationem fugit laborum repellendus, sunt iure vel. Sunt nesciunt atque voluptas magni nobis suscipit itaque delectus aliquid eligendi quam. Tempore!
        Accusamus id eaque corporis nihil est voluptatibus! Omnis, laborum, nesciunt numquam nam sequi iusto non earum magni et quas ab porro temporibus libero tempora vitae architecto aperiam autem, optio dolorum!
        Et, assumenda rerum, omnis sunt voluptates non ullam officiis beatae quod iusto sapiente repellendus. Ea maxime alias ipsa fugit, sequi dignissimos consequatur quia consectetur perspiciatis, enim est, minima laudantium nulla.
        Beatae, iure in sunt minus asperiores hic. Iste, dolorum facilis. Laboriosam reprehenderit animi suscipit voluptatibus corrupti praesentium unde, quibusdam deleniti expedita illum veritatis atque! Autem error mollitia dignissimos excepturi animi.
        Consequatur, commodi accusantium distinctio, veniam suscipit unde quaerat eos delectus animi rem iusto et labore omnis inventore dolorem dicta nemo deleniti blanditiis soluta nisi. Vitae quae praesentium quaerat quidem necessitatibus?
        Rerum porro autem ipsum consequuntur et saepe tempore. Totam doloremque ipsam unde error! Neque, consectetur sunt maxime quae natus quas ad inventore cum sequi, quis laudantium magni molestias cumque deleniti.
        Commodi, maxime velit eum dolor quisquam magni sint beatae doloremque praesentium non, quia reprehenderit maiores voluptatem at dicta optio cupiditate quos! Necessitatibus, illum quod. Sint in harum illum temporibus aliquid.
        Vel nam molestias est nesciunt distinctio! A sapiente asperiores eos placeat quia alias vero modi, ea enim accusantium quibusdam aliquam, dolore voluptatem? Error esse iste quos soluta in labore consequuntur!
        Sit esse vitae repellendus porro, ipsam mollitia tempora officiis? Accusamus minus nam vel esse, exercitationem aliquid enim doloribus odio porro a quae, ipsum natus vero. Quisquam tempora laudantium vitae praesentium!
        Totam ipsum soluta saepe nostrum harum porro, obcaecati quis ea esse repellat nam laboriosam est quidem quaerat delectus quia accusamus vel adipisci omnis enim, assumenda ratione vero? Neque, eum id?
        Odit eos autem minima facere, doloremque quod! Sed, sapiente totam quidem aspernatur deserunt voluptatem laboriosam in molestias ex omnis temporibus quod reiciendis doloremque quae porro pariatur perferendis id assumenda deleniti.
        Ea repellat tenetur unde aliquid cupiditate pariatur ducimus rem exercitationem a tempora asperiores nesciunt repudiandae, minus dignissimos, suscipit minima harum. Nulla ea temporibus asperiores distinctio soluta alias sapiente corrupti suscipit!
        Nam praesentium ipsa perspiciatis saepe molestiae dicta. Praesentium, quidem voluptatum? Fugit earum omnis tempore molestiae temporibus dolor asperiores ipsum. Eaque numquam est saepe nam quibusdam ratione alias quas, similique ex!</p>
      </div>
  )
}
