"use client"
import { ArrowLeft, Share2, Bookmark, MessageSquare, ThumbsUp, Clock, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Header from "@/components/header"
import { useRouter } from "next/navigation"
import PageBackground from "@/components/page-background"

// 模拟新闻数据库
const newsDatabase = {
  1: {
    id: 1,
    title: "央行发布2023年第四季度货币政策执行报告，强调稳健货币政策",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=400&q=80",
    source: "央行新闻",
    author: "李金融",
    publishDate: "2024-03-10",
    publishTime: "10:30",
    category: "policy",
    premium: true,
    likes: 256,
    comments: 48,
    content: `
      <p>中国人民银行今日发布2023年第四季度货币政策执行报告，报告强调将继续实施稳健的货币政策，灵活适度，加大对实体经济的支持力度，保持流动性合理充裕。</p>
      
      <p>报告指出，2023年第四季度，面对复杂严峻的国际环境和国内经济恢复中的困难挑战，人民银行坚持稳中求进工作总基调，完整、准确、全面贯彻新发展理念，加快构建新发展格局，着力推动高质量发展，整体物价水平保持基本稳定，就业形势总体改善，国际收支保持基本平衡，经济运行持续恢复向好。</p>
      
      <p>报告显示，2023年第四季度末，广义货币(M2)余额同比增长9.7%，社会融资规模存量同比增长9.5%，与名义经济增速基本匹配。人民币贷款增加22.75万亿元，同比多增1.88万亿元。</p>
      
      <p>在金融支持实体经济方面，报告提到，2023年第四季度，金融对实体经济的支持力度持续加大。制造业中长期贷款保持较快增长，普惠小微贷款增速明显高于各项贷款增速，绿色贷款、科技贷款等重点领域贷款增长较快。</p>
      
      <p>报告强调，下一阶段，人民银行将坚持稳字当头、稳中求进，继续实施稳健的货币政策。保持流动性合理充裕，保持货币供应量和社会融资规模增速同名义经济增速基本匹配，保持宏观杠杆率基本稳定。</p>
      
      <p>同时，进一步疏通货币政策传导机制，发挥好结构性货币政策工具的牵引带动作用，引导金融机构加大对科技创新、绿色发展、普惠小微、乡村振兴等重点领域和薄弱环节的支持力度。</p>
      
      <p>此外，报告还提到将深化利率市场化改革，完善市场化利率形成和传导机制，推动降低企业综合融资成本。同时，保持人民币汇率在合理均衡水平上的基本稳定。</p>
      
      <p>分析人士认为，此次报告释放了积极信号，表明央行将继续通过稳健的货币政策为经济恢复提供有力支持，同时注重防范金融风险，促进经济高质量发展。</p>
    `,
    relatedNews: [
      { id: 3, title: "数字经济新政出台，科技股有望迎来新一轮上涨" },
      { id: 6, title: "房地产市场调控政策持续优化，一线城市成交量回暖" },
      { id: 8, title: "银行业一季度净利润增长稳健，不良贷款率小幅下降" },
    ],
  },
  2: {
    id: 2,
    title: "美联储主席鲍威尔暗示年内或将降息，全球市场迎来利好",
    image:
      "https://images.unsplash.com/photo-1607921072916-f83192dba91c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=400&q=80",
    source: "国际财经",
    author: "王环球",
    publishDate: "2024-03-10",
    publishTime: "08:45",
    category: "global",
    premium: false,
    likes: 189,
    comments: 37,
    content: `
      <p>美联储主席杰罗姆·鲍威尔在最新讲话中表示，如果通胀持续下降，年内可能会考虑降息，这一表态引发全球市场积极反应。</p>
      
      <p>在昨日举行的经济政策研讨会上，鲍威尔指出，近几个月来美国通胀数据显示出持续下降的趋势，如果这一趋势能够保持，美联储将有足够的信心开始放松货币政策。他强调，任何降息决定都将基于经济数据的综合评估，而非预设的时间表。</p>
      
      <p>"我们需要看到更多的良好数据，以增强我们对通胀持续向2%目标回落的信心，"鲍威尔说，"如果经济基本按照预期发展，那么在今年某个时候开始降低政策限制性程度可能是适当的。"</p>
      
      <p>市场对鲍威尔的讲话反应积极。美国三大股指全线上涨，道琼斯工业平均指数上涨1.2%，标普500指数上涨1.4%，纳斯达克综合指数上涨1.7%。同时，美国10年期国债收益率下降，美元指数走弱。</p>
      
      <p>亚太市场今日开盘也普遍走高，日经225指数上涨1.5%，韩国综合指数上涨1.3%，澳大利亚ASX200指数上涨0.9%。中国香港恒生指数开盘上涨1.8%，A股市场也有望受到积极影响。</p>
      
      <p>分析师指出，鲍威尔的讲话比市场预期的更加"鸽派"，这增强了投资者对美联储今年可能降息的预期。根据芝加哥商品交易所的FedWatch工具，市场目前预计美联储今年将降息3-4次，首次降息可能在6月份的会议上。</p>
      
      <p>不过，也有分析师提醒，虽然鲍威尔的言论提振了市场情绪，但美联储的实际行动仍将取决于未来几个月的经济数据，特别是通胀和就业数据。如果通胀反弹或就业市场过热，美联储可能会推迟降息计划。</p>
      
      <p>对于全球经济而言，美联储转向宽松货币政策将是一个重要的转折点，有望缓解全球流动性压力，为新兴市场国家提供更大的政策空间，促进全球经济复苏。</p>
    `,
    relatedNews: [
      { id: 4, title: "上市公司一季度业绩普遍向好，消费板块表现亮眼" },
      { id: 7, title: "全球大宗商品价格波动加剧，黄金创历史新高" },
      { id: 10, title: "跨境电商新规实施，进出口贸易迎来新变化" },
    ],
  },
  3: {
    id: 3,
    title: "数字经济新政出台，科技股有望迎来新一轮上涨",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=400&q=80",
    source: "政策解读",
    author: "张科技",
    publishDate: "2024-03-10",
    publishTime: "06:15",
    category: "tech",
    premium: false,
    likes: 215,
    comments: 42,
    content: `
      <p>国家发改委等多部门联合发布数字经济发展新政策，加大对人工智能、大数据等领域的支持力度，科技股有望受益。</p>
      
      <p>据悉，这份题为《关于加快数字经济发展的指导意见》的文件由国家发改委、工信部、科技部等八部门联合印发，旨在推动数字经济和实体经济深度融合，培育经济发展新动能。</p>
      
      <p>《指导意见》提出，到2025年，数字经济核心产业增加值占GDP比重达到10%以上，数字化研发设计工具普及率达到85%，大型工业企业关键工序数控化率达到68%，数字经济相关产业就业人数超过6000万。</p>
      
      <p>在具体措施方面，《指导意见》提出了五大重点任务：</p>
      
      <p>一是加强数字技术创新。支持人工智能、量子信息、区块链等前沿技术研发，推动关键核心技术突破。设立国家数字经济创新发展基金，引导社会资本加大投入。</p>
    `,
  },
}

export default function NewsDetailPage({ params }) {
  const router = useRouter()
  const newsId = Number.parseInt(params.id)
  const newsItem = newsDatabase[newsId]

  if (!newsItem) {
    return <div>新闻不存在</div>
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 relative">
      {/* 添加背景组件 */}
      <PageBackground />

      <Header
        title="资讯详情"
        centerTitle={true}
        showBell={false}
        showLogo={false}
        leftComponent={
          <Link href="/news" className="mr-4">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
        }
      />

      {/* 内容区域 */}
      <div className="px-4 py-4 relative z-10">
        <Card className="mb-4 bg-white">
          <CardContent className="p-4">
            <h1 className="text-2xl font-bold mb-2">{newsItem.title}</h1>
            <div className="flex items-center text-gray-500 text-sm mb-3">
              <span>{newsItem.source}</span>
              <span className="mx-2">•</span>
              <span>{newsItem.author}</span>
              <span className="mx-2">•</span>
              <span>
                <Calendar className="inline-block mr-1" size={12} />
                {newsItem.publishDate}
              </span>
              <span className="mx-2">•</span>
              <span>
                <Clock className="inline-block mr-1" size={12} />
                {newsItem.publishTime}
              </span>
            </div>
            <img src={newsItem.image || "/placeholder.svg"} alt={newsItem.title} className="w-full rounded-md mb-3" />
            <div dangerouslySetInnerHTML={{ __html: newsItem.content }} className="text-gray-700" />
          </CardContent>
        </Card>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Button variant="outline" size="sm" className="mr-2">
              <ThumbsUp className="mr-2 h-4 w-4" />
              {newsItem.likes}
            </Button>
            <Button variant="outline" size="sm">
              <MessageSquare className="mr-2 h-4 w-4" />
              {newsItem.comments}
            </Button>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="sm" className="mr-2">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">相关新闻</h2>
          {newsItem.relatedNews.map((related) => (
            <Card key={related.id} className="mb-2 bg-white">
              <CardContent className="p-3">
                <Link href={`/news/${related.id}`} className="block hover:underline">
                  {related.title}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

