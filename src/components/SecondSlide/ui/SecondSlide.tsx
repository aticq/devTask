import React, { useCallback } from 'react';
import sperm1 from 'assets/images/SecondSlide/Sperm1.png';
import sperm2 from 'assets/images/SecondSlide/Sperm2.png';
import sperm3 from 'assets/images/SecondSlide/Sperm3.png';
import sperm4 from 'assets/images/SecondSlide/Sperm4.png';
import sperm5 from 'assets/images/SecondSlide/Sperm5.png';
import styles from './SecondSlide.module.css';

interface SecondSlideTypes {
    activeSlide?: number;
}

const SecondSlide = React.memo(({ activeSlide }: SecondSlideTypes) => {
    const getClassNames = useCallback(
        (index: number) => (activeSlide === 1 ? styles[`sperm${index}`] : ''),
        [activeSlide],
    );

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img className={`${styles.sperm} ${getClassNames(1)}`} src={sperm1} alt="sperm1" />
                <img className={`${styles.sperm} ${getClassNames(2)}`} src={sperm2} alt="sperm2" />
                <img className={`${styles.sperm} ${getClassNames(3)}`} src={sperm3} alt="sperm3" />
                <img className={`${styles.sperm} ${getClassNames(4)}`} src={sperm4} alt="sperm4" />
                <img className={`${styles.sperm} ${getClassNames(5)}`} src={sperm5} alt="sperm5" />
            </div>
            <div className={styles.message}>
                <h2>
                    Текст
                    <br />
                    Сообщения
                </h2>
            </div>
            <div className={styles.descriptionWrapper}>
                <div className={styles.descriptionBackground}>
                    <div className={styles.description}>
                        <p className={styles.descriptionText}>
                            <span>Lorem ipsum dolor sit amet</span>
                            {' '}
                            consectetur adipisicing elit.
                            Nisi provident temporibus itaque ipsum placeat magni est voluptatum
                            voluptatem fugit? Eum porro repudiandae impedit quia rem ex,
                            distinctio magni nostrum vitae corrupti accusantium veniam culpa
                            fugiat provident omnis excepturi beatae totam debitis assumenda odit
                            minus delectus accusamus ducimus aliquid! Nihil illum adipisci iure.
                            Velit explicabo illum ex, omnis mollitia impedit. Dignissimos
                            voluptatibus mollitia eos dolore molestias sed id maiores earum. Nam,
                            facere dolores vitae dignissimos dolor magni eius sapiente iste,
                            doloremque labore maiores aut, atque veniam soluta quia similique
                            corporis itaque distinctio ea laudantium reprehenderit quidem
                            mollitia. Ullam doloremque necessitatibus repellat! Tempore eos sequi
                            omnis a, commodi, sit ullam voluptate delectus veritatis praesentium
                            quaerat ad accusamus voluptatum molestias dolore dicta qui.
                            Praesentium molestiae debitis itaque hic repudiandae aperiam nihil
                            eaque sequi similique error! Possimus id ipsum impedit nemo maxime
                            unde quisquam architecto ea! Maiores atque officia, maxime culpa
                            animi, unde eum laborum nisi eius ratione nostrum repellendus
                            voluptatem quis sed pariatur quam ipsam aspernatur rem quidem.
                            Deleniti mollitia illo libero. Beatae iusto minus at facere dolores ex
                            similique aperiam obcaecati exercitationem. Porro quia, explicabo
                            numquam at ad ab similique ullam culpa rerum blanditiis reprehenderit
                            cumque quaerat temporibus ut, laboriosam qui delectus iste labore
                            illum optio quos quas repudiandae, voluptates alias! Beatae at
                            deleniti, blanditiis hic dolorum fugiat quam eveniet animi incidunt
                            esse earum nesciunt accusantium laborum fuga commodi? Possimus magni
                            amet veritatis alias rem deleniti animi tempora eius, in officia
                            maxime sit. Adipisci ut recusandae quibusdam asperiores sint fugit
                            accusamus quae. Dolorem maxime optio illo, magnam, libero numquam nisi
                            consectetur itaque quia rem officiis? In ipsa alias dignissimos
                            voluptates vero rem deserunt repellat temporibus quisquam aliquam
                            minus, quae similique cupiditate, cumque reiciendis odio ex rerum
                            fugiat odit officia voluptatibus accusamus! Possimus cumque veritatis,
                            voluptatem iure aliquid ex eligendi quam cum consectetur veniam
                            exercitationem nam voluptas saepe non corporis dicta nulla quis.
                            Consectetur assumenda vel eius necessitatibus saepe quos voluptatem
                            quasi, tempore eum nemo sunt, natus ipsam nulla eaque architecto
                            cumque enim? Ipsum, enim corporis laudantium quam dignissimos ullam
                            odio nisi error quisquam, dolorem repudiandae dicta fuga
                            exercitationem in possimus alias molestias voluptatem! Reiciendis,
                            sapiente alias provident placeat non modi nihil voluptates earum esse
                            quibusdam, molestias atque? Iusto eaque, quo ratione consequatur
                            commodi tempore aliquam maiores et voluptate reprehenderit ad,
                            veritatis magni molestias neque enim officiis inventore quasi. Porro
                            sit quod, id ut molestiae laborum illo pariatur voluptatibus odit
                            doloremque nam? Fugit eos suscipit earum voluptatum? Laboriosam
                            debitis in quidem consequatur ipsa non excepturi eum officiis tempore
                            dolor, quaerat ea nihil provident veniam, sed mollitia? Reprehenderit
                            possimus fugiat delectus consequuntur nobis, a vel molestias ea
                            praesentium sit eius deleniti dolorum, omnis in, velit harum!
                            Assumenda praesentium explicabo sint aut ad veritatis quo ex. Ab
                            nesciunt velit dolorem tempore dolores quisquam nulla magni at neque.
                            Perferendis dicta illo fugit similique voluptatem sed reiciendis earum
                            molestias voluptatum error illum maxime explicabo delectus iure harum
                            aliquid quasi architecto accusantium rerum consequuntur cum, natus
                            temporibus nesciunt! Soluta aspernatur unde dolor qui vero, quia
                            accusamus eum perspiciatis necessitatibus quisquam maiores, deleniti
                            nostrum nemo. Architecto sed amet natus voluptate repellat veritatis
                            vitae aliquam rem! Quas reiciendis porro nam error praesentium libero?
                            Dolor cum qui minima iusto quidem quo id voluptatibus ad sint magnam!
                            Dolor iste dolorem aut, omnis quam ea labore commodi eaque adipisci!
                            Voluptate velit illo quidem recusandae rerum atque ipsa cum totam
                            minima aut adipisci ducimus quo delectus voluptatem, corrupti ipsam,
                            nisi magnam earum! Facilis nisi iusto distinctio! Consequuntur, dolore
                            in. Molestiae, veritatis aut consequatur, esse debitis odit a harum
                            fugiat tenetur quos beatae consequuntur vel cum quasi. Quis maiores
                            dicta enim quia voluptatum recusandae ducimus? Repellat distinctio
                            asperiores suscipit, quia odit illo esse omnis totam commodi sint
                            accusamus, corrupti aspernatur amet fuga atque ullam consequatur
                            expedita. Reprehenderit delectus sint fuga, rerum velit perferendis
                            asperiores error nulla incidunt suscipit distinctio corrupti minus
                            dignissimos expedita eius vel? Hic at quidem laudantium natus debitis?
                            Ad incidunt cupiditate optio distinctio, nostrum maxime expedita
                            blanditiis corrupti consectetur facere pariatur harum adipisci dicta
                            veritatis a libero exercitationem eius nihil accusantium quia id
                            asperiores praesentium! Ratione vero eos vitae! Mollitia aliquam nihil
                            obcaecati minima qui expedita ipsam ipsum vel ea eos, sed esse illum
                            tenetur culpa unde, totam, error debitis? Molestias quas modi dolor
                            dignissimos aliquid deserunt atque enim quae consequuntur ad
                            consequatur sapiente architecto, pariatur mollitia labore
                            voluptatibus, nam quisquam dicta incidunt dolores voluptate. Modi
                            voluptatem id temporibus repudiandae, et soluta quod dolores magnam in
                            totam iure suscipit libero quae possimus quibusdam consectetur. Vero
                            animi repellendus veritatis est laboriosam? Adipisci voluptas impedit
                            perferendis odit, laboriosam expedita repellat non, quod dignissimos
                            labore, aperiam ullam beatae nobis inventore eligendi similique.
                            Dolorem sint illum unde, totam harum placeat sit recusandae fuga vero
                            cumque aut quasi optio debitis explicabo veniam nobis id. Accusantium
                            rerum, dolorum doloribus aliquam quae tempora aut atque delectus
                            suscipit fugit sequi quasi, nostrum deleniti sit reprehenderit dolorem
                            magnam itaque eaque quo voluptatem voluptate animi maxime nesciunt!
                            Iure deserunt consectetur, at velit quo aliquam praesentium quos illum
                            consequuntur inventore corrupti reprehenderit officia incidunt,
                            aspernatur aliquid provident quia mollitia vitae porro, nulla itaque
                            cum voluptas voluptatibus repellat. Culpa excepturi accusantium odio
                            iusto? Amet in, eveniet asperiores consectetur minus tenetur eligendi
                            perspiciatis libero nesciunt aperiam expedita a consequuntur quis
                            dolores esse fugit placeat nihil ipsum et earum sapiente reprehenderit
                            quam provident. Repudiandae magni quae officia nobis maiores culpa
                            impedit. Quas provident deserunt vero, a pariatur eos veniam nihil
                            aliquid ullam quis facilis, perspiciatis minus possimus doloribus
                            reprehenderit aspernatur quo quia ad nemo ex. Libero neque voluptates
                            doloremque, ex possimus voluptatibus ratione ipsum beatae molestiae.
                            Pariatur, reiciendis? Sint sapiente repellat blanditiis expedita,
                            pariatur ipsa corrupti minus! Hic, obcaecati, optio labore ipsam saepe
                            odio cumque nihil, fugiat porro praesentium soluta eos doloribus
                            suscipit distinctio ipsa culpa. Eos repellendus similique cum aliquid
                            et, dolorum dolores sit laboriosam itaque earum tempore officia
                            dolorem delectus ipsum, atque iure ratione accusamus laudantium quidem
                            at distinctio dicta libero sed! Reprehenderit dicta, at maiores rerum
                            eos qui temporibus accusantium quas omnis illum, iure, tenetur
                            recusandae. Magni reiciendis possimus obcaecati quam eligendi. Non.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default SecondSlide;
