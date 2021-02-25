import userEvent from "@testing-library/user-event";
import { render, waitFor, screen } from "@testing-library/react";
import App from "./App";

const expectedText = [
  '2 BR | 8 Bath | 1043 Sq Ft$20,714,26174434 East Sweet Bottom Br, Houston, TexasListed: 4/23/11',
  '3 BR | 6.5 Bath | 5607 Sq Ft$9,375,7518369 West MAJESTY STREET Path, Oak Ridge, TexasListed: 9/25/94',
  '5 BR | 5 Bath | 1990 Sq Ft$12,104,86990678 South VELLUM Extension, Cypress, TexasListed: 10/25/91',
  '6 BR | 3 Bath | 2955 Sq Ft$7,857,29134149 East GRANICUS Mews, Houston, TexasListed: 11/11/91',
  '2 BR | 5.5 Bath | 1452 Sq Ft$13,685,16821366 South Creek Mist Bluff, Cypress, TexasListed: 3/29/05',
  '5 BR | 2.5 Bath | 2991 Sq Ft$20,764,44689810 East Running Doe Knoll, Katy, TexasListed: 7/20/12',
  '3 BR | 6 Bath | 2607 Sq Ft$16,438,97159603 West Zuelke Forge, Katy, TexasListed: 0/2/10',
  '1 BR | 8 Bath | 3363 Sq Ft$17,450,66896294 West BEAD GRASS TER Gate, Cypress, TexasListed: 10/6/12',
  '5 BR | 6 Bath | 2991 Sq Ft$14,218,25518985 West Perry Hill Trce, Oak Ridge, TexasListed: 3/15/96',
  '6 BR | 4 Bath | 1990 Sq Ft$10,114,94539781 West Old Woman Springs Rd Drive, Katy, TexasListed: 3/21/11',
  '6 BR | 3 Bath | 2305 Sq Ft$7,987,59613045 East Hedstrom Road Falls, Oak Ridge, TexasListed: 2/3/07',
  '4 BR | 6.5 Bath | 4985 Sq Ft$21,944,50981545 East PLUMAS CT Trace, Tomball, TexasListed: 3/10/96',
  '4 BR | 7.5 Bath | 2130 Sq Ft$9,014,063172 North British Colony Boulevard, Oak Ridge, TexasListed: 3/16/10',
  '6 BR | 6 Bath | 3498 Sq Ft$10,815,93686242 South OCOTILLO CT Boulevard, The Woodlands, TexasListed: 10/13/90',
  '3 BR | 7 Bath | 10100 Sq Ft$419,29465991 North THE PASEO Fwy, Oak Ridge, TexasListed: 10/16/95',
  '1 BR | 7.5 Bath | 2018 Sq Ft$774,44462993 South Wilbur Ave Pl, The Woodlands, TexasListed: 0/28/02',
  '4 BR | 4.5 Bath | 722 Sq Ft$9,199,16622690 West Hunters Hollow Garden, Oak Ridge, TexasListed: 7/17/00',
  '5 BR | 7.5 Bath | 240 Sq Ft$7,633,39312763 South 33 STREET Trce, Tomball, TexasListed: 0/24/06',
  '1 BR | 6 Bath | 2840 Sq Ft$9,243,87168385 North Giaramita Row, Katy, TexasListed: 1/6/97',
  '3 BR | 3.5 Bath | 2130 Sq Ft$23,507,30546761 West Deep Step Meadow, Katy, TexasListed: 2/6/98'
]

test(`renders ${expectedText.length} listings on the page`, async () => {
  const { container } = render(<App />);

  await waitFor(() => {
    expect(Array.from(container.getElementsByClassName('Listing'))).toHaveLength(expectedText.length);
  });

  const listings = Array.from(container.getElementsByClassName('Listing'));

  // Expect the first listing to be unliked
  const icon = listings[0].querySelector('.like-icon img');
  expect(icon.getAttribute('src')).toContain('heart.');
  expect(icon.getAttribute('alt')).toBe('Save This');

  // Perform a click on the like icon
  userEvent.click(listings[0].querySelector('.like-icon'));

  // Expect the first listing to now be liked
  expect(icon.getAttribute('src')).toContain('heart-full.');

  listings.forEach((listing, index) => {
    expect(listing.textContent).toBe(expectedText[index]);
  })

  userEvent.click(screen.getByText('Saved Listings'));

  expect(Array.from(container.getElementsByClassName('Listing'))).toHaveLength(1);
  expect(container.querySelector('.Listing').textContent).toBe(expectedText[0])
});
