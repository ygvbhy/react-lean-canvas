// useParams - 파라미터 가져오기
// useSearchParams - 쿼리 파라미터 가져오기
import { useParams, useSearchParams, useLocation } from 'react-router-dom';

const CanvasDetail = () => {
  // 파라미터 가져오기
  const { id } = useParams();
  // 쿼리 파라미터 가져오기
  // 해당 데이터 가져오는 법 - searchParams.get('파라미터 이름')
  const [searchParams] = useSearchParams();

  // 현재 경로 가져오기
  // hash, key, pathname, search, state
  const location = useLocation();
  console.log(location);

  return (
    <>
      <div>CanvasDetail</div>
      <p>id: {id}</p>
      <p>keyword: {searchParams.get('keyword')}</p>
    </>
  );
};

export default CanvasDetail;
