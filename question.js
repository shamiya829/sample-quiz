const questions = [
    "Walk me through the 3 financial statements.",
    "Can you give examples of major line items on each of the financial statements?",
    "How do the 3 statements link together?",
    "If I were stranded on a desert island, only had 1 statement and I wanted to review the overall health of a company – which statement would I use and why?",
    "Let’s say I could only look at 2 statements to assess a company’s prospects – which 2 would I use and why?",
];


const answers = [
    "The three major financial statements are the Income Statement, Balance Sheet, and Cash Flow Statement which provide information on a company's revenue, expenses, assets, liabilities, equity, and cash flow.",
    "The Income Statement shows revenue, expenses, and net income; the Balance Sheet shows assets, liabilities, and equity; and the Cash Flow Statement shows the sources and uses of cash from operating, investing, and financing activities.",
    "Net Income adds to Cash Flow, adjusted for Balance Sheet changes. Investing & financing activities yield the net change in cash; Assets = Liabilities + Equity.",
    "The Cash Flow Statement shows a company's actual cash generation, unlike the Income Statement which may be misleading, making it crucial for analysis.",
    "The Income Statement and Balance Sheet can be used to create the Cash Flow Statement, making them important financial statements for analysis.",
];

const questionAnswerPairs = questions.map((question, index) => ({
    question,
    answer: answers[index],
}));
