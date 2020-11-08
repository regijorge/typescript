import { MatchReader } from './MatchReader'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { WinsAnalysis } from './analysers/WinsAnalysis'
import { Summary } from './Summary'

const matchReader = MatchReader.fromCsv('football.csv')
matchReader.load()

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
)
summary.buildAndPrintReport(matchReader.matches)

const summaryHtml = Summary.winsAnalysisWithHtmlReport('Man United')
summaryHtml.buildAndPrintReport(matchReader.matches)
