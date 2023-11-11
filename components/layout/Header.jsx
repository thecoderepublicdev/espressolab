import Logo from "@components/shared/Logo";
import Modal from "@components/shared/Modal";
import { useApplication } from "@hooks/useApplication";
import classNames from "classnames";
import Link from "next/link";
import Flag from 'react-world-flags';



function NavigationMenu() {
    const { PrimaryFont, languages } = useApplication();

    const MenuItems = [
        {
            show: true,
            title: "Ana Sayfa",
            path: '/',
        },
        {
            show: true,
            title: "Kahve & Biz",
            path: '/kahve-ve-biz',
        },
        {
            show: true,
            title: "Şubelerimiz",
            path: '/subeler',
        },
        {
            show: true,
            title: "Mağaza",
            path: '/magaza',
        },
        {
            show: true,
            title: (<span className="material-symbols-outlined">globe</span>),
            children: {
                type: 'modal',
                isHave: true,
                content: (
                    <aside>
                        <div>
                            <label className="font-bold text-2xl">Dilini Seç</label>
                            <p className="text-black/50">Daha iyi bir deneyim için kendi dilini seçerek gezintiye devam edebilirsiniz.</p>
                        </div>

                        <div className="grid gap-4 mt-4">
                            {languages.map((lang, key) => (
                                <button key={key} className={classNames(
                                    'p-4 rounded-xl flex gap-4 items-center justify-between content-center hover:bg-black/5 group'
                                )}>
                                    <div className="flex gap-4">
                                        <Flag code={lang.country_code} height={32} width={32} className='rounded-sm' />
                                        <label>{lang.name}</label>
                                    </div>

                                    <span className="material-symbols-outlined text-green-500 hidden group-hover:block">done</span>
                                </button>
                            ))}
                        </div>
                    </aside>
                )
            },
        }
    ]

    return(
        <nav role="navigation">
            <div className="flex gap-4 items-stretch content-stretch">
                {MenuItems.map((item, key) => item?.children?.isHave ? (
                    <Modal>
                        <Modal.Trigger key={key} className={classNames(
                                "block p-4 font-bold transition-all ease-in-out text-black/50 hover:text-[#B22526] relative after:absolute after:content-[''] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:w-0 after:bg-[#B22526] after:h-2 hover:after:w-[40px]",
                                PrimaryFont
                            )}>
                            {item.title}
                        </Modal.Trigger>

                        <Modal.Content>
                            {item.children.content}
                        </Modal.Content>
                    </Modal>
                ) : (
                    <Link key={key} href={item.path} className={classNames(
                        "block p-4 relative after:absolute after:content-[''] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:transition-all after:w-0 after:bg-[#B22526] after:h-2 hover:after:w-[40px] font-bold transition-all ease-in-out text-black/50 hover:text-[#B22526]",
                        PrimaryFont
                    )}>
                        {item.title}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default function Header() {
    return(
        <header className="min-h-[60px]">
            <div className="max-w-screen-xl p-4 mx-auto flex justify-between items-stretch content-center">
                <Logo width={40}/>
                <NavigationMenu/>
            </div>
        </header>
    )
}