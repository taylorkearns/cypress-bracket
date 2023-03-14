describe("ESPN Bracket", () => {
  it("Navigate to bracket", () => {
    cy.visit(
      "https://fantasy.espn.com/tournament-challenge-bracket/2023/en/bracket"
    );
  });

  it("Round of 64", () => {
    const roundOf64Picks = [
      // "Alabama",
      // "Maryland",
      // "San Diego St",
      // "Virginia",
      // "NC State",
      // "UCSB",
      // "Utah St",
      // "Arizona",
      // "Purdue",
      // "FAU",
      // "Duke",
      // "Tennessee",
      // "Providence",
      "Kansas St",
      // "USC",
      // "Marquette",
      // "Houston",
      // "Iowa",
      // "Drake",
      // "Kent St",
      // "MSST/PITT",
      // "Kennesaw St",
      // "Penn St",
      // "Colgate",
      "Kansas",
      // "Arkansas",
      // "VCU",
      // "UConn",
      // "ASU/NEV",
      // "Grand Canyon",
      // "Boise St",
      // "UCLA",
    ];

    for (const team of roundOf64Picks) {
      cy.get(".matchup")
        .not(".incomplete")
        .find(".slot span")
        .not(".selectedToAdvance")
        .contains(team)
        .parents("a")
        .click();
    }
  });
});
