import Link from "next/link";
import Button from "../components/base/Button";
import QuestionList from "../components/ui/question-list/QuestionList";

const HomePage = () => {
  return (
    <main>
      <div className="flex items-center justify-between px-4 pb-4">
        <h1 className="text-2xl sm:text-4xl text">Questions</h1>
        <Link href="/questions/ask">
          <Button variant="primary">Ask Question</Button>
        </Link>
      </div>
      <QuestionList />
    </main>
  );
};

export default HomePage;
