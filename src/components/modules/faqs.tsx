import { Disclosure } from '@headlessui/react';
import { MinusSmIcon, PlusIcon } from '@heroicons/react/outline';
import BlockContent from '@sanity/block-content-to-react';
import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';

import { ISanityFaqs } from '../../fragments/sanity-frequently-asked-questions-parts';

interface FAQsProps {
  frequentlyAskedQuestions: ISanityFaqs;
}

function FAQs({ frequentlyAskedQuestions }: FAQsProps): JSX.Element {
  return (
    <div className="bg-gray-50">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">
            {frequentlyAskedQuestions.title}
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {frequentlyAskedQuestions.faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex items-start w-full space-x-2 text-left text-gray-400">
                        <span className="flex items-center h-7">
                          {open ? (
                            <MinusSmIcon
                              className="w-6 h-6 text-primary"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusIcon
                              className="w-6 h-6 text-dark"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                        <span
                          className={`font-medium ${
                            open ? 'text-primary' : 'text-dark'
                          }`}
                        >
                          {faq.question}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <AnimatePresence>
                      {open && (
                        <Disclosure.Panel
                          static
                          as={motion.dd}
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { opacity: 1, height: 'auto' },
                            collapsed: { opacity: 0, height: 0 },
                          }}
                          transition={{ duration: 0.15 }}
                          className="pr-12 mt-2 overflow-y-hidden"
                        >
                          <BlockContent
                            renderContainerOnSingleChild
                            blocks={faq._rawAnswer}
                            className="text-base prose text-gray-500"
                          />
                        </Disclosure.Panel>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export { FAQs };
