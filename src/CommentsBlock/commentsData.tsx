import Egor from "./images/Egor.jpg";
import Kate from "./images/Kate.jpg";
import Artem from "./images/Artem.jpg";
import Sasha from "./images/Sasha.jpg";
import Nikita from "./images/Nikita.jpg"
import Pasha from "./images/Pasha.jpg";
import Kristina from "./images/Kristina.jpg";

export interface CommentData {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

export const commentsData: CommentData[] = [
  {
    id: 1,
    name: "Умрилов Егор",
    avatar: Egor,
    rating: 5,
    text: "Это было невероятно! Научился свистеть за 2 часа. Теперь все друзья в шоке от моих навыков. Преподаватель объясняет очень понятно и доступно!",
  },
  {
    id: 2,
    name: "Кузина Екатерина",
    avatar: Kate,
    rating: 5,
    text: "Просто восторг! Давно хотела научиться этому трюку. На мастер-классе всё показали пошагово. Рекомендую всем друзьям и товарищам!",
  },
  {
    id: 3,
    name: "Юрьев Артем",
    avatar: Artem,
    rating: 4,
    text: "Хороший опыт! Немного не хватило индивидуального подхода, но в целом очень понравилось. Теперь могу привлекать внимание без слов 😄",
  },
  {
    id: 4,
    name: "Шахматов Александр",
    avatar: Sasha,
    rating: 5,
    text: "Отличный мастер-класс! Атмосфера супер, все очень дружелюбные. Свистеть двумя пальцами оказалось сложнее, чем я думал, но результат того стоит!",
  },
  {
    id: 5,
    name: "Жуков Никита",
    avatar: Nikita,
    rating: 5,
    text: "Круто провели время! Очень энергичный преподаватель, всё объясняет с юмором. Уже на следующий день смог насвистеть мелодию!",  
  },
  {
    id: 6,
    name: "Захаркин Павел",
    avatar: Pasha,
    rating: 5,
    text: "Думал, это просто прикол, но после мастер-класса реально могу свистеть так, что мама из другой комнаты слышит! Одногруппники в шоке😎",
  },
  {
    id: 7,
    name: "Козлова Кристина",
    avatar: Kristina,
    rating: 5,
    text: "Пришла за компанию с подругой, а ушла с новым навыком! Оказалось, свистеть двумя пальцами — это не так просто, но очень круто. Теперь могу подозвать такси без слов 🚕",
  },
];