/*
 * Module: MMM-Saint
 * @bugsounet
 * 2hdlockness
 */

const NodeHelper = require("node_helper");

var log = () => { /* do nothing */ };

module.exports = NodeHelper.create({
  start () {
    console.log("[SAINT] MMM-Saint Version:", require("./package.json").version);
    this.Saint = new Array();
    for (var i = 1; i <= 31; i++) this.Saint[i] = new Array();

    /** this.Saint[jour][mois] = "Nom du this.Saint" **/
    this.Saint[1][1] = "Jour de l'an";
    this.Saint[1][2] = "Ste Ella";
    this.Saint[1][3] = "St Aubin";
    this.Saint[1][4] = "St Hugues";
    this.Saint[1][5] = "St Jeremie";
    this.Saint[1][6] = "St Justin";
    this.Saint[1][7] = "St Thierry";
    this.Saint[1][8] = "St Alphonse";
    this.Saint[1][9] = "St Gilles";
    this.Saint[1][10] = "Ste Thérèse";
    this.Saint[1][11] = "Tousthis.Saint";
    this.Saint[1][12] = "Ste Florence";
    this.Saint[2][1] = "St Basile";
    this.Saint[2][2] = "St Théophane";
    this.Saint[2][3] = "St Jaouen";
    this.Saint[2][4] = "Ste Sandrine";
    this.Saint[2][5] = "St Boris";
    this.Saint[2][6] = "Ste Blandine";
    this.Saint[2][7] = "St Martinien";
    this.Saint[2][8] = "St Julien";
    this.Saint[2][9] = "Ste Ingrid";
    this.Saint[2][10] = "St Léger";
    this.Saint[2][11] = "Défunts";
    this.Saint[2][12] = "Ste Viviane";
    this.Saint[3][1] = "Ste Geneviève";
    this.Saint[3][2] = "St Blaise";
    this.Saint[3][3] = "St Gwénola";
    this.Saint[3][4] = "St Richard";
    this.Saint[3][5] = "St Philippe";
    this.Saint[3][6] = "St Kevin";
    this.Saint[3][7] = "St Thomas";
    this.Saint[3][8] = "Ste Lydie";
    this.Saint[3][9] = "St Grégoire";
    this.Saint[3][10] = "St Gérard";
    this.Saint[3][11] = "St Hubert";
    this.Saint[3][12] = "St Xavier";
    this.Saint[4][1] = "St Odilon";
    this.Saint[4][2] = "Ste Véronique";
    this.Saint[4][3] = "St Casimir";
    this.Saint[4][4] = "St Isidore";
    this.Saint[4][5] = "St Sylvain";
    this.Saint[4][6] = "Ste Clotilde";
    this.Saint[4][7] = "St Florent";
    this.Saint[4][8] = "St Jean-Marie";
    this.Saint[4][9] = "Ste Rosalie";
    this.Saint[4][10] = "St François";
    this.Saint[4][11] = "St Charles";
    this.Saint[4][12] = "Ste Barbara";
    this.Saint[5][1] = "St Edouard";
    this.Saint[5][2] = "Ste Agathe";
    this.Saint[5][3] = "St Olive";
    this.Saint[5][4] = "Ste Irène";
    this.Saint[5][5] = "Ste Judith";
    this.Saint[5][6] = "St Igor";
    this.Saint[5][7] = "St Antoine";
    this.Saint[5][8] = "St Abel";
    this.Saint[5][9] = "Ste Raïssa";
    this.Saint[5][10] = "Ste Fleur";
    this.Saint[5][11] = "Ste Sylvie";
    this.Saint[5][12] = "St Gérald";
    this.Saint[6][1] = "Ste Mélaine";
    this.Saint[6][2] = "St Gaston";
    this.Saint[6][3] = "Ste Colette";
    this.Saint[6][4] = "St Marcellin";
    this.Saint[6][5] = "Ste Prudence";
    this.Saint[6][6] = "St Norbert";
    this.Saint[6][7] = "Ste Mariette";
    this.Saint[6][8] = "St Octavien";
    this.Saint[6][9] = "St Bertrand";
    this.Saint[6][10] = "St Bruno";
    this.Saint[6][11] = "Ste Bertille";
    this.Saint[6][12] = "St Nicolas";
    this.Saint[7][1] = "St Raymond";
    this.Saint[7][2] = "Ste Eugénie";
    this.Saint[7][3] = "Ste Félicité";
    this.Saint[7][4] = "St Jean-Baptiste";
    this.Saint[7][5] = "Ste Gisèle";
    this.Saint[7][6] = "St Gilbert";
    this.Saint[7][7] = "St Eliane";
    this.Saint[7][8] = "St Gaétan";
    this.Saint[7][9] = "Ste Reine";
    this.Saint[7][10] = "St Serge";
    this.Saint[7][11] = "Ste Carine";
    this.Saint[7][12] = "St Ambroise";
    this.Saint[8][1] = "St Lucien";
    this.Saint[8][2] = "Ste Jacqueline";
    this.Saint[8][3] = "St Jean de Dieu";
    this.Saint[8][4] = "Ste Julie";
    this.Saint[8][5] = "St Désiré";
    this.Saint[8][6] = "St Médard";
    this.Saint[8][7] = "St Thibaud";
    this.Saint[8][8] = "St Dominique";
    this.Saint[8][9] = "St Adrien";
    this.Saint[8][10] = "Ste Pélagie";
    this.Saint[8][11] = "St Geoffroy";
    this.Saint[8][12] = "Ste Frida";
    this.Saint[9][1] = "Ste Alix";
    this.Saint[9][2] = "Ste Apolline";
    this.Saint[9][3] = "Ste Françoise";
    this.Saint[9][4] = "St Gautier";
    this.Saint[9][5] = "Ste Pacôme";
    this.Saint[9][6] = "Ste Diane";
    this.Saint[9][7] = "Ste Amandine";
    this.Saint[9][8] = "St Amour";
    this.Saint[9][9] = "St Alain";
    this.Saint[9][10] = "St Denis";
    this.Saint[9][11] = "St Théodore";
    this.Saint[9][12] = "St Pierre Fourier";
    this.Saint[10][1] = "St Guillaume";
    this.Saint[10][2] = "St Arnaud";
    this.Saint[10][3] = "St Vivien";
    this.Saint[10][4] = "St Fulbert";
    this.Saint[10][5] = "Ste Solange";
    this.Saint[10][6] = "Ste Trinité";
    this.Saint[10][7] = "St Ulric";
    this.Saint[10][8] = "St Laurent";
    this.Saint[10][9] = "Ste Inès";
    this.Saint[10][10] = "St Ghislain";
    this.Saint[10][11] = "St Léon";
    this.Saint[10][12] = "St Romaric";
    this.Saint[11][1] = "St Paulin";
    this.Saint[11][2] = "ND de Lourdes";
    this.Saint[11][3] = "Ste Rosine";
    this.Saint[11][4] = "St Stanislas";
    this.Saint[11][5] = "Ste Estelle";
    this.Saint[11][6] = "St Barnabé";
    this.Saint[11][7] = "St Benoît";
    this.Saint[11][8] = "Ste Claire";
    this.Saint[11][9] = "St Adelphe";
    this.Saint[11][10] = "St Firmin";
    this.Saint[11][11] = "St Martin";
    this.Saint[11][12] = "St Daniel";
    this.Saint[12][1] = "Ste Tatiana";
    this.Saint[12][2] = "St Félix";
    this.Saint[12][3] = "Ste Justine";
    this.Saint[12][4] = "St Jules";
    this.Saint[12][5] = "St Achille";
    this.Saint[12][6] = "St Guy";
    this.Saint[12][7] = "St Olivier";
    this.Saint[12][8] = "Ste Clarisse";
    this.Saint[12][9] = "St Apollinaire";
    this.Saint[12][10] = "St Wilfrid";
    this.Saint[12][11] = "St Christian";
    this.Saint[12][12] = "Ste Chantal";
    this.Saint[13][1] = "Ste Yvette";
    this.Saint[13][2] = "Ste Béatrice";
    this.Saint[13][3] = "St Rodrigue";
    this.Saint[13][4] = "Ste Ida";
    this.Saint[13][5] = "Ste Rolande";
    this.Saint[13][6] = "St Antoine";
    this.Saint[13][7] = "St Henri - St Joël";
    this.Saint[13][8] = "St Hippolyte";
    this.Saint[13][9] = "St Aimé";
    this.Saint[13][10] = "St Géraud";
    this.Saint[13][11] = "St Brice";
    this.Saint[13][12] = "St Lucie";
    this.Saint[14][1] = "Ste Nina";
    this.Saint[14][2] = "St Valentin";
    this.Saint[14][3] = "Ste Mathilde";
    this.Saint[14][4] = "St Maxime";
    this.Saint[14][5] = "St Matthias";
    this.Saint[14][6] = "St Elisée";
    this.Saint[14][7] = "St Camille - Fête Nationale";
    this.Saint[14][8] = "St Evrard";
    this.Saint[14][9] = "St Materne";
    this.Saint[14][10] = "St Juste";
    this.Saint[14][11] = "St Sidoine";
    this.Saint[14][12] = "Ste Odile";
    this.Saint[15][1] = "St Rémi";
    this.Saint[15][2] = "St Claude";
    this.Saint[15][3] = "Ste Louise";
    this.Saint[15][4] = "St Paterne";
    this.Saint[15][5] = "Ste Denise";
    this.Saint[15][6] = "Ste Germaine";
    this.Saint[15][7] = "St Donald";
    this.Saint[15][8] = "Ste Marie - Assomption";
    this.Saint[15][9] = "St Roland";
    this.Saint[15][10] = "Ste Thérèse";
    this.Saint[15][11] = "St Albert";
    this.Saint[15][12] = "Ste Ninon";
    this.Saint[16][1] = "St Marcel";
    this.Saint[16][2] = "Ste Julienne";
    this.Saint[16][3] = "Ste Bénédicte";
    this.Saint[16][4] = "St Benoît-Joseph";
    this.Saint[16][5] = "St Honoré";
    this.Saint[16][6] = "St Régis";
    this.Saint[16][7] = "Ste Carmen";
    this.Saint[16][8] = "St Armel";
    this.Saint[16][9] = "Ste Edith";
    this.Saint[16][10] = "Ste Edwige";
    this.Saint[16][11] = "Ste Marguerite";
    this.Saint[16][12] = "Ste Alice";
    this.Saint[17][1] = "Ste Roseline";
    this.Saint[17][2] = "St Alexis";
    this.Saint[17][3] = "St Patrick";
    this.Saint[17][4] = "St Anicet";
    this.Saint[17][5] = "St Pascal";
    this.Saint[17][6] = "St Hervé";
    this.Saint[17][7] = "Ste Charlotte";
    this.Saint[17][8] = "St Hyacinthe";
    this.Saint[17][9] = "St Renaud";
    this.Saint[17][10] = "St Baudouin";
    this.Saint[17][11] = "Ste Elisabeth";
    this.Saint[17][12] = "St Gaël";
    this.Saint[18][1] = "Ste Prisca";
    this.Saint[18][2] = "Ste Bernadette";
    this.Saint[18][3] = "St Cyrille";
    this.Saint[18][4] = "St Parfait";
    this.Saint[18][5] = "St Eric";
    this.Saint[18][6] = "St Léonce";
    this.Saint[18][7] = "St Frédéric";
    this.Saint[18][8] = "Ste Hélène";
    this.Saint[18][9] = "Ste Nadège";
    this.Saint[18][10] = "St Luc";
    this.Saint[18][11] = "Ste Aude";
    this.Saint[18][12] = "St Gatien";
    this.Saint[19][1] = "St Marius";
    this.Saint[19][2] = "St Gabin";
    this.Saint[19][3] = "St Joseph";
    this.Saint[19][4] = "Ste Emma";
    this.Saint[19][5] = "St Yves";
    this.Saint[19][6] = "St Romuald";
    this.Saint[19][7] = "St Arsène";
    this.Saint[19][8] = "St Jean-Eudes";
    this.Saint[19][9] = "Ste Emilie";
    this.Saint[19][10] = "St René Goupil";
    this.Saint[19][11] = "St Tanguy";
    this.Saint[19][12] = "St Urbain";
    this.Saint[20][1] = "St Sébastien";
    this.Saint[20][2] = "Ste Aimée";
    this.Saint[20][3] = "St Herbert";
    this.Saint[20][4] = "Ste Odette";
    this.Saint[20][5] = "St Bernardin";
    this.Saint[20][6] = "St Silvère";
    this.Saint[20][7] = "Ste Marina";
    this.Saint[20][8] = "St Bernard";
    this.Saint[20][9] = "St Davy";
    this.Saint[20][10] = "Ste Adeline";
    this.Saint[20][11] = "St Edmond";
    this.Saint[20][12] = "St Théophile";
    this.Saint[21][1] = "Ste Agnès";
    this.Saint[21][2] = "St Damien";
    this.Saint[21][3] = "Ste Clémence";
    this.Saint[21][4] = "St Anselme";
    this.Saint[21][5] = "St Constantin";
    this.Saint[21][6] = "St Rodolphe";
    this.Saint[21][7] = "St Victor";
    this.Saint[21][8] = "St Christophe";
    this.Saint[21][9] = "St Matthieu";
    this.Saint[21][10] = "Ste Céline";
    this.Saint[21][11] = "Présentation de Marie";
    this.Saint[21][12] = "St Pierre Canisius";
    this.Saint[22][1] = "St Vincent";
    this.Saint[22][2] = "Ste Isabelle";
    this.Saint[22][3] = "Ste Léa";
    this.Saint[22][4] = "St Alexandre";
    this.Saint[22][5] = "St Emile";
    this.Saint[22][6] = "St Alban";
    this.Saint[22][7] = "Ste Marie-Madeleine";
    this.Saint[22][8] = "St Fabrice";
    this.Saint[22][9] = "St Maurice";
    this.Saint[22][10] = "Ste Elodie";
    this.Saint[22][11] = "Ste Cécile";
    this.Saint[22][12] = "Ste Françoise-Xavière";
    this.Saint[23][1] = "St Barnard";
    this.Saint[23][2] = "St Lazare";
    this.Saint[23][3] = "St Victorien";
    this.Saint[23][4] = "St Georges";
    this.Saint[23][5] = "St Didier";
    this.Saint[23][6] = "Ste Audrey";
    this.Saint[23][7] = "Ste Brigitte";
    this.Saint[23][8] = "Ste Rose";
    this.Saint[23][9] = "St Constant";
    this.Saint[23][10] = "St Jean de Capistran";
    this.Saint[23][11] = "St Clément";
    this.Saint[23][12] = "St Armand";
    this.Saint[24][1] = "St François de Sales";
    this.Saint[24][2] = "St Modeste";
    this.Saint[24][3] = "Ste Catherine";
    this.Saint[24][4] = "St Fidèle";
    this.Saint[24][5] = "St Donatien";
    this.Saint[24][6] = "St Yann";
    this.Saint[24][7] = "Ste Christine";
    this.Saint[24][8] = "St Barthélémy";
    this.Saint[24][9] = "Ste Thècle";
    this.Saint[24][10] = "St Florentin";
    this.Saint[24][11] = "Ste Flora";
    this.Saint[24][12] = "Ste Adèle";
    this.Saint[25][1] = "St Apollos";
    this.Saint[25][2] = "St Roméo";
    this.Saint[25][3] = "Annonciation";
    this.Saint[25][4] = "St Marc";
    this.Saint[25][5] = "Ste Sophie";
    this.Saint[25][6] = "St Prosper";
    this.Saint[25][7] = "St Jacques";
    this.Saint[25][8] = "St Louis";
    this.Saint[25][9] = "St Hermann";
    this.Saint[25][10] = "St Crépin";
    this.Saint[25][11] = "Ste Catherine";
    this.Saint[25][12] = "Noël";
    this.Saint[26][1] = "Ste Paule";
    this.Saint[26][2] = "St Nestor";
    this.Saint[26][3] = "Ste Lara";
    this.Saint[26][4] = "Ste Alida";
    this.Saint[26][5] = "St Bérenger";
    this.Saint[26][6] = "St Anthelme";
    this.Saint[26][7] = "Ste Anne";
    this.Saint[26][8] = "Ste Natacha";
    this.Saint[26][9] = "St Côme - St Damien";
    this.Saint[26][10] = "St Dimitri";
    this.Saint[26][11] = "Ste Delphine";
    this.Saint[26][12] = "St Etienne";
    this.Saint[27][1] = "Ste Angèle";
    this.Saint[27][2] = "Ste Honorine";
    this.Saint[27][3] = "St Habib";
    this.Saint[27][4] = "Ste Zita";
    this.Saint[27][5] = "St Augustin";
    this.Saint[27][6] = "St Fernand";
    this.Saint[27][7] = "Ste Nathalie";
    this.Saint[27][8] = "Ste Monique";
    this.Saint[27][9] = "St Vincent de Paul";
    this.Saint[27][10] = "Ste Emeline";
    this.Saint[27][11] = "St Séverin";
    this.Saint[27][12] = "St Jean";
    this.Saint[28][1] = "St Thomas d'Aquin";
    this.Saint[28][2] = "St Romain";
    this.Saint[28][3] = "St Gontran";
    this.Saint[28][4] = "Ste Valérie";
    this.Saint[28][5] = "St Germain";
    this.Saint[28][6] = "St Irénée";
    this.Saint[28][7] = "St Samson";
    this.Saint[28][8] = "St Augustin";
    this.Saint[28][9] = "St Venceslas";
    this.Saint[28][10] = "St Simon";
    this.Saint[28][11] = "St Jacques de la Marche";
    this.Saint[28][12] = "St Gaspard";
    this.Saint[29][1] = "St Gildas";
    this.Saint[29][2] = "St Auguste";
    this.Saint[29][3] = "Ste Gwladys";
    this.Saint[29][4] = "Ste Catherine";
    this.Saint[29][5] = "St Aymard";
    this.Saint[29][6] = "St Pierre - St Paul";
    this.Saint[29][7] = "Ste Marthe";
    this.Saint[29][8] = "Ste Sabine";
    this.Saint[29][9] = "Sts Michel";
    this.Saint[29][10] = "St Narcisse";
    this.Saint[29][11] = "St Saturnin";
    this.Saint[29][12] = "St David";
    this.Saint[30][1] = "Ste Martine";
    this.Saint[30][3] = "St Amédée";
    this.Saint[30][4] = "St Robert";
    this.Saint[30][5] = "St Ferdinand";
    this.Saint[30][6] = "St Martial";
    this.Saint[30][7] = "Ste Juliette";
    this.Saint[30][8] = "St Fiacre";
    this.Saint[30][9] = "St Jérôme";
    this.Saint[30][10] = "Ste Bienvenue";
    this.Saint[30][11] = "St André";
    this.Saint[30][12] = "St Roger";
    this.Saint[31][1] = "Ste Marcelle";
    this.Saint[31][3] = "St Benjamin";
    this.Saint[31][5] = "Ste Perrette";
    this.Saint[31][7] = "St Ignace";
    this.Saint[31][8] = "St Aristide";
    this.Saint[31][10] = "St Quentin";
    this.Saint[31][12] = "St Sylvestre";

    this.DayNow = null;
    this.MonthNow = null;
    this.myDay = null;
    this.DayTomorrow = null;
    this.MonthTomorrow = null;
    this.Data = {
      today: null,
      tomorrow: null
    };
  },

  socketNotificationReceived (notification, payload) {
    switch (notification) {
      case "CONFIG":
        this.config = payload;
        if (this.config.debug) log = (...args) => { console.log("[SAINT]", ...args); };
        log("Config:", this.config);
        this.initialize();
        break;
    }
  },

  initialize () {
    console.log("[SAINT] MMM-Saint Version:", require("./package.json").version, "rev:", require("./package.json").rev);
    this.sendSocketNotification("INITIALIZED");
    this.myDay = new Date(Date.now()).getDate();
    this.getDate();
    this.sendData(this.SaintDuJour());
    this.update();
    console.log("[SAINT] MMM-Saint is now initialized!");
  },

  sendData (data) {
    log("Send Data to module:", data);
    this.sendSocketNotification("DATA", data);
  },

  SaintDuJour () {
    log(`Actual Day: ${this.DayNow}`, `In memory: ${this.myDay}`);
    this.Data.today = this.Saint[this.DayNow][this.MonthNow];
    this.Data.tomorrow = this.Saint[this.DayTomorrow][this.MonthTomorrow];
    log(`Today ${this.DayNow}/${this.MonthNow}:`, this.Data.today);
    log(`Tomorrow ${this.DayTomorrow}/${this.MonthTomorrow}:`, this.Data.tomorrow);

    return this.Data;
  },

  update () {
    setInterval(() => {
      this.getDate();
      if (this.DayNow !== this.myDay) {
        this.sendData(this.SaintDuJour());
        this.myDay = this.DayNow;
        log("Updated!");
      }
    }, this.config.update);
  },

  getDate () {
    var MyDate = new Date(Date.now());
    this.DayNow = MyDate.getDate();
    this.MonthNow = MyDate.getMonth() + 1;
    var Tomorrow = new Date(new Date(Date.now()).setDate(new Date(Date.now()).getDate() + 1));
    this.DayTomorrow = Tomorrow.getDate();
    this.MonthTomorrow = Tomorrow.getMonth() + 1;
  }
});