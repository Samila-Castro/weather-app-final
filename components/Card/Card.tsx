import styles from "./Card.module.css";
import Image from "next/image";

interface CardProps {
  image_path: string;
  title: string;
  unity?: string;
  value?: string;
}

export default function Card({ image_path, title, unity, value }: CardProps) {
  return (
    <div className={styles.metricsWrapper}>
      <Image src={image_path} alt="Imagem" className={styles.img} />
      <div className={styles.metricsContent}>
        <p>{title}</p>
        <h5>
          {value} <span>{unity}</span>
        </h5>
      </div>
    </div>
  );
}
