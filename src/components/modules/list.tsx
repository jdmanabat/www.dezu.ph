import { nanoid } from 'nanoid';
import * as React from 'react';

import type { ISanityList } from '../../fragments/sanity-list-parts';
import { classNames } from '../../utils/classnames';
import {
  BG_COLOUR_MAP,
  TEXT_COLOUR_MAP,
} from '../../utils/object-dictionaries';

interface ListProps {
  list: ISanityList;
}
function List({ list }: ListProps): JSX.Element {
  return (
    <div
      className={classNames(
        BG_COLOUR_MAP[list.colourScheme],
        TEXT_COLOUR_MAP[list.colourScheme]
      )}
    >
      <div className="w-full px-4 py-24 mx-auto sm:px-6 lg:px-24">
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <p
              className={classNames(
                TEXT_COLOUR_MAP[list.colourScheme],
                'text-lg font-semibold mb-2'
              )}
            >
              {list.subtitle}
            </p>
            <h2
              className={classNames(
                TEXT_COLOUR_MAP[list.colourScheme],
                'text-4xl font-semibold'
              )}
            >
              {list.title}
            </h2>
          </div>
          <div className="flex space-x-12 md:space-x-32 lg:justify-center lg:col-span-2">
            {list.columnOne && (
              <ul className="pl-6 space-y-3 list-disc">
                {list.columnOne.map((item) => (
                  <li className="text-xl eading-5" key={nanoid()}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {list.columnTwo && (
              <ul className="pl-6 space-y-3 list-disc">
                {list.columnTwo.map((item) => (
                  <li className="text-xl eading-5" key={nanoid()}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { List };
