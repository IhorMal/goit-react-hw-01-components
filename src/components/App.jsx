import css from './App.module.css'
import user from './profile/user.json'
import dats from './Statistics/data.json'
import friends from './FriendList/friends.json'
import transactions from './TransactionHistory/transactions.json' 
import { Rrofile } from './profile/Profile'
import {Statistics} from './Statistics/Statistics'
import { FriendList } from './FriendList/FriendList'
import {TransactionHistory} from './TransactionHistory/TransactionHistory'
export const App = () => {
  return (
    <div className={css}>
      <Rrofile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title='Upload stats' stats={dats}></Statistics>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
