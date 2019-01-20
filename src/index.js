import React from 'react';
import ReactDOM from 'react-dom';
import Table from './components/Table';
import './styles/index.scss';

const sampleData = [
  {
    account_id: 88470,
    steamid: '76561197960354198',
    avatar:
      'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/1e/1ebd57e6f505eb7fc09e943a09a6e79fffabbbd2.jpg',
    avatarmedium:
      'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/1e/1ebd57e6f505eb7fc09e943a09a6e79fffabbbd2_medium.jpg',
    avatarfull:
      'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/1e/1ebd57e6f505eb7fc09e943a09a6e79fffabbbd2_full.jpg',
    profileurl: 'https://steamcommunity.com/id/misterdurst69/',
    personaname: 'Tzy丶',
    last_login: null,
    full_history_time: '2018-11-08T01:14:19.343Z',
    cheese: 0,
    fh_unavailable: false,
    loccountrycode: 'CN',
    last_match_time: '2019-01-18T14:18:00.000Z',
    name: 'TZY',
    country_code: 'cn',
    fantasy_role: 1,
    team_id: 6020739,
    team_name: '',
    team_tag: '',
    is_locked: false,
    is_pro: true,
    locked_until: null,
  },
  {
    account_id: 1296625,
    steamid: '76561197961562353',
    avatar:
      'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/95/951e9165740fda890651d8475fc50f5368a847bb.jpg',
    avatarmedium:
      'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/95/951e9165740fda890651d8475fc50f5368a847bb_medium.jpg',
    avatarfull:
      'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/95/951e9165740fda890651d8475fc50f5368a847bb_full.jpg',
    profileurl: 'https://steamcommunity.com/id/jnewsham/',
    personaname: 'Newsham',
    last_login: '2018-12-21T03:12:56.027Z',
    full_history_time: '2018-06-06T15:08:37.244Z',
    cheese: 0,
    fh_unavailable: false,
    loccountrycode: 'US',
    last_match_time: '2019-01-13T16:42:39.000Z',
    name: 'Newsham',
    country_code: '',
    fantasy_role: 2,
    team_id: 6196091,
    team_name: 'TEAM TEAM',
    team_tag: 'TEAMTEAM',
    is_locked: true,
    is_pro: true,
    locked_until: null,
  },
];

const App = () => {
  return (
    <div className="container">
      <h1>Dota 2 Pros</h1>
      <Table data={sampleData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
