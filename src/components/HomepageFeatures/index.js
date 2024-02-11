import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Hỗ trợ ngay và luôn 💯',
    Image: require("@site/static/img/docusaurus.png").default,
    description: (
      <>
        Chúng mình có team hỗ trợ (gần như) 24/7, sẵn sàng giúp đỡ khi bạn gặp lỗi.
        Hãy liên hệ với chúng mình qua email hoặc facebook.
      </>
    ),
  },
  {
    title: 'Hiệu quả 🍀',

    description: (
      <>
        Ubunchuu Trường Ú cung cấp cho bạn hệ thống tutorial được đầy đủ, chuẩn hóa
        và đồng bộ để bạn có thể cài đặt và sử dụng.
      </>
    ),
  },
  {
    title: 'Cài đặt mượt mà ✨',

    description: (
      <>
        Bằng việc follow hướng dẫn của chúng mình, bạn sẽ có thể cài đặt và sử dụng
        ubuntu một cách dễ dàng.
      </>
    ),
  },
  {
    title: 'Đa dạng 🎉',

    description: (
      <>
        Có nhiều dự án để bạn khám phá như "15 Days Flying With Tux", manga "Ubunchuu",
        config giao diện, terminal, etc.
      </>
    )
  },
  {
    title: 'Tìm kiếm 🔎',

    description: (
      <>
        Tìm kiếm từ khóa dễ dàng với công cụ tìm kiếm được build sẵn trong trang.
      </>
    )
  },
  {
    title: 'Dark mode 🌗',

    description: (
      <>
        Bạn có thể đổi light/dark mode bằng cách nhấn vào biểu tượng mặt trăng ở
        góc trên bên phải.
      </>
    )
  }
];

function Feature({ Image, title, description }) {
  console.log(Image);
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
