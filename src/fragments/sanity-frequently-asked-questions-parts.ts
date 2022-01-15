import { graphql } from 'gatsby';

interface IFaq {
  id: string;
  _rawAnswer: [];
  question: string;
}

interface ISanityFaqs {
  id: string;
  _type: 'frequentlyAskedQuestions';
  faqs: IFaq[];
  title: string;
}

const SanityFrequentlyAskedQuestionsParts = graphql`
  fragment SanityFrequentlyAskedQuestionsParts on SanityFrequentlyAskedQuestions {
    id: _key
    _type
    faqs {
      id: _key
      _rawAnswer
      question
    }
    title
  }
`;

export { SanityFrequentlyAskedQuestionsParts };
export type { ISanityFaqs };
